$('#lblMessage').text('');

$('#btnJoinBBSKSS').click(function () {

    $(this).val('In Progress..');
    $(this).prop('disabled', true);

    var name = $('#fullName').val();
    var address = $('#txtAddress').val();
    var birthday = $('#birthdayDate').val();
    var email = $('#emailAddress').val();
    var phone = $('#phoneNumber').val();
    var designation = $('#designation').val();
    var organization = $('#organizationDetails').val();
    var paymentReference = $('#paymentReferenceNumber').val();
    var paymentAmount = $('#paymentAmount').val();
    var currentDate = new Date().toDateString();

    var emailSubject = `BBSKSS.ORG | New member joined : ${name}`;
    var emailBody = `<h2 style='color:red;'>New Member Registration Details</h2>
<table border="1">
<tr><td>Name</td><td>${name}</td></tr>
<tr><td>Address</td><td>${address}</td></tr>
<tr><td>Birthday</td><td>${birthday}</td></tr>
<tr><td>Email Address</td><td>${email}</td></tr>
<tr><td>Phone Number</td><td>${phone}</td></tr>
<tr><td>Designation</td><td>${designation}</td></tr>
<tr><td>Organization name</td><td>${organization}</td></tr>
<tr><td>Payment Amount</td><td>${paymentAmount}</td></tr>
<tr><td>Payment Reference No.</td><td>${paymentReference}</td></tr>
<tr><td>Registration Date</td><td>${currentDate}</td></tr>
</table>
`;

    var request = {
        ToEmail: 'bbskss2020@gmail.com', EmailSubject: emailSubject,
        EmailBody: emailBody, IsBodyHtml: true
    };

    $.ajax({
        url: 'http://113.193.63.106:4050/api/email',
        type: 'post',
        data: JSON.stringify(request),
        contentType: "application/json",
        success: function (response) {
            $('#btnJoinBBSKSS').val('Submit');
            $('#btnJoinBBSKSS').prop('disabled', false);
            // $(this).attr('disabled', false);
            $('#lblMessage').text('Your membership details is submitted successfully');
        },
        error: function (error) {
            $('#btnJoinBBSKSS').val('Submit');
            $('#btnJoinBBSKSS').prop('disabled', false);
            // $(this).attr('disabled', false);
            $('#lblMessage').text('Error in submitting membership details. Please try after sometime.');
        }
    });
});