// Userlist data array for filling in info box
var userListData = [];
var getUrl = 'http://localhost:3000/user/all';
var addUrl = 'http://localhost:3000/user/add';
var deleteUrl = 'http://localhost:3000/user/delete';

// DOM Ready =============================================================
$(document).ready(function () {

    // Populate the user table on initial page load
    populateTable();

    // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Add User button click
    // $('#btnAddUser').on('click', addUser);
    document.getElementById('btnAddUser').addEventListener('click', addUser);

    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

    var anchorElem = document.getElementById('google_link');
    anchorElem.addEventListener('click', function(event){
        event.preventDefault();
        console.log('google link clicked');
    });
    anchorElem.addEventListener('mouseenter', function(event){
        event.preventDefault();
        console.log('google link hovered');
    });
    anchorElem.addEventListener('focus', function(event){
        event.preventDefault();
        console.log('google link focused');
    });
    anchorElem.addEventListener('mouseout', function(event){
        event.preventDefault();
        console.log('google link un-hovered');
    });
});

// Functions =============================================================

// Fill table with data
function populateTable1() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.ajax({
        url: getUrl,
        method: 'GET',
        success: function (data) {

            userListData = data;
            // For each item in our JSON, add a table row and cells to the content string
            $.each(data, function () {
                tableContent += '<tr>';
                tableContent += '<td><a href="#" class="linkshowuser" rel="' + this['$loki'] + '">' + this.username + '</a></td>';
                tableContent += '<td>' + this.email + '</td>';
                tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this['$loki'] + '">delete</a></td>';
                tableContent += '</tr>';
            });

            // Inject the whole content string into our existing HTML table
            $('#userList table tbody').html(tableContent);
        },
        error: function (error) {
            alert('fetch error!!!');
        }
    });
};

function populateTable() {
    // Empty content string
    var tableContent = '';

    // This section tells you how to use the AJAX object and hit a resource. Here the resource is a file in the server
    // Here we are forming the XHR object and sending the request
    var req = new XMLHttpRequest();
    req.open('GET', getUrl);
    req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
            userListData = JSON.parse(req.response);
            console.log('response -', userListData);
            // For each item in our JSON, add a table row and cells to the content string
            userListData.forEach(function (item) {
                tableContent += '<tr>';
                tableContent += '<td><a href="#" class="linkshowuser" rel="' + item['$loki'] + '">' + item.username + '</a></td>';
                tableContent += '<td>' + item.email + '</td>';
                tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + item['$loki'] + '">delete</a></td>';
                tableContent += '</tr>';
            });

            // Inject the whole content string into our existing HTML table
            document.querySelector('#userList table tbody').innerHTML = tableContent;
            // document.getElementById('userList').querySelector('table tbody').innerHTML = tableContent;
            // document.getElementById('userList').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].innerHTML = tableContent;
        } else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            console.error("Failed!", Error(req.statusText));
        }
    };
    // Handle network errors
    req.onerror = function () {
        console.error("Failed!", Error("Network Error"));
    };
    // Make the request
    req.send();
}

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var id = $(this).attr('rel');
    console.log(id);

    // Get Index of object based on id value
    var idArray = userListData.map(function (arrayItem) {
        return arrayItem['$loki'];
    });
    console.log(idArray);
    var arrayPosition = idArray.indexOf(parseInt(id));
    console.log(arrayPosition);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

};

// Add User
function addUser(event) {
    console.log('event = ',event);
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function (index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'username': document.querySelector('#addUser input#inputUserName').value,
            'email': document.querySelector('#addUser input#inputUserEmail').value,
            'fullname': $('#addUser input#inputUserFullname').val(),
            'age': $('#addUser input#inputUserAge').val(),
            'location': $('#addUser input#inputUserLocation').val(),
            'gender': $('#addUser input#inputUserGender').val()
        }
        console.log('user object =', newUser);
        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: addUrl,
            dataType: 'JSON'
        })
        .done(function (response) {
            // Check for successful (blank) response
            if (response) {

                // Clear the form inputs
                $('#addUser input').val('');

                // Update the table
                populateTable();

            } else {

                // If something goes wrong, alert the error message that our service returned
                console.error('Error: ' + response);

            }
        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: deleteUrl + '/' + $(this).attr('rel')
        })
        .done(function (response) {

            // Check for a successful (blank) response
            if (response) {
                console.log('successfully deleted -', response);
            } else {
                console.error('Error: ' + response);
            }

            // Update the table
            populateTable();

        });

    } else {

        // If they said no to the confirm, do nothing
        return false;

    }

};