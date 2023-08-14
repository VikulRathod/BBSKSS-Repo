$(function () {

    var maharashtra = [
        { name: 'प्रा. डॉ. व्यंकटेश रामचंद्र राठोड', city: 'मुंबई', post: 'प्रदेश अध्यक्ष', contact: '9423472580', photo: 'img/noimage.png' },
        { name: 'श्री जगनभाऊ रामजी राठोड', city: 'यवतमाळ', post: 'प्रदेश कार्याध्‍यक्ष', contact: '9404371939', photo: 'img/noimage.png' },
        { name: 'श्री विश्‍वनाथ हरिभाऊ राठोड', city: 'चंद्रपुर', post: 'प्रदेश उपाध्यक्ष', contact: '9850183664', photo: 'img/noimage.png' },
        { name: 'सुश्री जीजाताई राठोड', city: 'जळगाव', post: 'प्रदेश उपाध्यक्ष', contact: '9518988088', photo: 'img/noimage.png' },
        { name: 'सुश्री कविताताई लक्ष्मण राठोड', city: 'यवतमाळ', post: 'प्रदेश उपाध्यक्ष', contact: '9421770648', photo: 'img/noimage.png' },
        { name: 'प्राचार्य. किसन पवार', city: 'बीड', post: 'प्रदेश महासचिव', contact: '7720059905', photo: 'img/noimage.png' },
        { name: 'श्री सुरेश रूपसिंग', city: 'मुंबई', post: 'प्रदेश कोषाध्यक्ष', contact: '9222204892', photo: 'img/noimage.png' },
        { name: 'प्रा. विशाल अमरसिंग जाधव', city: 'अमरावती', post: 'प्रदेश संघटन सचिव', contact: '9763885508/9860880444', photo: 'img/noimage.png' },
        { name: 'प्रा. डॉ. प्रभंजन भटू चव्‍हाण', city: 'पुणे', post: 'प्रदेश संघटन सचिव', contact: '9423239316', photo: 'img/noimage.png' },
        { name: 'प्राचार्य डॉ. प्रकाश भीमराव जाधव', city: 'बीड', post: 'प्रदेश संघटन सचिव', contact: '7770015050', photo: 'img/noimage.png' },
        { name: 'श्री आत्‍माराम काळू चव्‍हाण', city: 'मुंबई', post: 'प्रदेश संघटन सचिव', contact: '9930771818', photo: 'img/noimage.png' },
        { name: 'प्रा. डॉ. सुदाम गेमू राठोड', city: 'धुळे', post: 'प्रदेश संघटन सचिव', contact: '9175022216', photo: 'img/noimage.png' },
        { name: 'श्री इंजी. संजय दुलसिंग रोठोड', city: 'चंद्रपुर', post: 'प्रदेश संघटन सचिव', contact: '9588657601', photo: 'img/noimage.png' },
        { name: 'श्री अनिल हरी राठोड', city: 'ठाणे', post: 'प्रदेश सचिव', contact: '8108777267/ 8169468210', photo: 'img/noimage.png' },
        { name: 'श्री सुभाष देवसिंग राठोड', city: 'बुलढाणा', post: 'प्रदेश सचिव', contact: '9011759332', photo: 'img/noimage.png' },
        { name: 'प्रा. डॉ. यशवंत बाबुराव चव्हाण', city: 'लातूर', post: 'प्रदेश सचिव', contact: '9422742580', photo: 'img/noimage.png' },
        { name: 'श्री इंजि. मोरेश्‍वर अरुण राठोड', city: 'नागपुर', post: 'प्रदेश सचिव', contact: '9011459774', photo: 'img/noimage.png' },
        { name: 'श्री कोमल सरि‍चंद जाधव', city: 'जळगाव', post: 'प्रदेश सचिव', contact: '7020792314', photo: 'img/noimage.png' },
        { name: 'प्रा. डॉ. भारत लक्ष्मण राठोड', city: 'पुणे', post: 'प्रदेश सचिव', contact: '9309815349', photo: 'img/noimage.png' },
        { name: 'श्री गणेश राठोड (करमटोट)', city: 'चंद्रपुर', post: 'प्रदेश सहसचिव', contact: '9890221577', photo: 'img/noimage.png' },
        { name: 'श्री वि‍शाल राठोड', city: 'मुंबई', post: 'प्रदेश सहसचिव', contact: '7977287237', photo: 'img/noimage.png' },
        { name: 'श्री नि‍तीन रमेश जाधव', city: 'ठाणे', post: 'प्रदेश सहसचिव', contact: '8108242832', photo: 'img/noimage.png' },
        { name: 'श्री अतुल दिलिप आडे', city: 'मुंबई', post: 'प्रदेश सहसचिव', contact: '9664155564', photo: 'img/noimage.png' },
        { name: 'श्री कल्याण सखाराम राठोड', city: 'नांदेड', post: 'प्रदेश सहसचिव', contact: '7507668899/ 7020630533', photo: 'img/noimage.png' },
        { name: 'श्री गणेश मधुकर चव्हाण', city: 'यवतमाळ', post: 'प्रदेश सहसचिव', contact: '9420044318', photo: 'img/noimage.png' },
        { name: 'श्री रविंद्र बी. राठोड', city: 'नागपुर', post: 'प्रदेश सहसचिव', contact: '9028677020', photo: 'img/noimage.png' },
        { name: 'श्री अनिलकुमार लक्ष्मण चव्हाण', city: 'पुणे', post: 'प्रदेश सहसचिव', contact: '9325447955', photo: 'img/noimage.png' },
        { name: 'श्री प्रेमचंद भाऊलाल बंजारा', city: 'जळगाव', post: 'प्रदेश सहसचिव', contact: '9595794072', photo: 'img/noimage.png' },
        { name: 'सुश्री इंजि. मीनाक्षीताई कि‍रण राठोड', city: 'मुंबई', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9833477525', photo: 'img/noimage.png' },
        { name: 'सुश्री शितलताई पुनिराम राठोड', city: 'यवतमाळ', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8275394951', photo: 'img/noimage.png' },
        { name: 'सुश्री संगिताताई नरसिंग राठोड', city: 'नागपुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8999025541', photo: 'img/noimage.png' },
        { name: 'सुश्री अनिताताई अशोक राठोड', city: 'चंद्रपुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8007464468', photo: 'img/noimage.png' },
        { name: 'सुश्री सुचिताताई एकनाथ राठोड', city: 'कल्याण', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9867874876', photo: 'img/noimage.png' },
        { name: 'सुश्री अर्चनाताई पांडुरंग जाधव', city: 'यवतमाळ', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8806520220', photo: 'img/noimage.png' },
        { name: 'सुश्री रेजीनाताई तुळशिराम चव्‍हाण', city: 'यवतमाळ', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9405404938', photo: 'img/noimage.png' },
        { name: 'सुश्री प्रणिताताई पुरुषात्तम चव्‍हाण', city: 'यवतमाळ', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9326455575', photo: 'img/noimage.png' },
        { name: 'सुश्री सिमाताई हिरासिंग काळे', city: 'यवतमाळ', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8275057336', photo: 'img/noimage.png' },
        { name: 'सुश्री वैजयंतीताई प्रकाश राठोड', city: 'चंद्रपुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8554993228', photo: 'img/noimage.png' },
        { name: 'सुश्री यशोदाताई वामन राठोड', city: 'चंद्रपुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9657244293', photo: 'img/noimage.png' },
        { name: 'श्री दिनेश काळू राठोड', city: 'भंडारा', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9422960469', photo: 'img/noimage.png' },
        { name: 'श्री डी. एस. राठोड', city: 'अकोला', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9764270278', photo: 'img/noimage.png' },
        { name: 'श्री सुरेश मंगुजी राठोड (कवी)', city: 'नागपुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '7350739565', photo: 'img/noimage.png' },
        { name: 'श्री दशरथ वामनराव राठोड', city: 'ठाणे', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9967409224', photo: 'img/noimage.png' },
        { name: 'श्री मच्छिंद्र चोखा राठोड', city: 'सोलापुर', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9421025909', photo: 'img/noimage.png' },
        { name: 'श्री नरेंद्र चंद्रकांत पवार', city: 'हिंगोली', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9423290232', photo: 'img/noimage.png' },
        { name: 'श्री निरंजन बळीराम मुडे (कवी)', city: 'मुंबई', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9082199867', photo: 'img/noimage.png' },
        { name: 'श्री नामदेव चव्‍हाण', city: 'वाशिम', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9763202096', photo: 'img/noimage.png' },
        { name: 'श्री पंजाब शामराव पवार', city: 'ठाणे', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8652336767', photo: 'img/noimage.png' },
        { name: 'श्री नारायण जाधव', city: 'अमरावती', post: 'प्रदेश कार्यकारणी सदस्य', contact: '9403619186', photo: 'img/noimage.png' },
        { name: 'श्री अनंत जगन्नाथ जाधव', city: 'भुसावल', post: 'प्रदेश कार्यकारणी सदस्य', contact: '8554006262', photo: 'img/noimage.png' },
        { name: 'डॉ. कि‍शोर ग्यानबा राठोड', city: 'नांदेड', post: 'प्रदेश कार्यकारणी सदस्य', contact: '7507500661', photo: 'img/noimage.png' }
    ];

    var delhi = [
        { name: 'श्री रामपाल राठौड़', city: 'दिल्‍ली', post: 'State Conveners', contact: '9818801999', photo: 'img/noimage.png' },
        { name: 'श्री धनपत धरसोत', city: 'दिल्‍ली', post: 'State Conveners', contact: 'XXXX XXXX XX', photo: 'img/noimage.png' }
    ];

    var telagana = [
        { name: 'डॉ राम कोटि', city: 'तेलंगाना', post: 'State Conveners', contact: '8125409470', photo: 'img/noimage.png' },
    ];

    var AndhraPradesh = [
        { name: 'डॉ. लक्ष्मीकांत नायक, कुलपति', city: 'आंध्र प्रदेश', post: 'State Conveners', contact: 'XXXX XXXX XX', photo: 'img/noimage.png' },
    ];

    var Karnataka = [
        { name: 'डॉ. हरिलाल पवार', city: 'कर्नाटक', post: 'State Conveners', contact: '9901379445', photo: 'img/noimage.png' },
    ];

    var UttarPradesh = [
        { name: 'श्री मुन्ना लाल नायक', city: 'उत्तर प्रदेश', post: 'State Conveners', contact: '8800223383', photo: 'img/noimage.png' },
    ];

    var Hariyana = [
        { name: 'श्री सोनू राठौड़', city: 'हरियाणा', post: 'State Conveners', contact: '9991171817', photo: 'img/noimage.png' },
    ];

    var TamilNadu = [
        { name: 'वकील एम आर रमेश', city: 'तमिलनाडु', post: 'State Conveners', contact: '9943355283', photo: 'img/noimage.png' },
    ];

    var Kerala = [
        { name: 'श्री मुरुगन सामी', city: 'केरल', post: 'State Conveners', contact: '9072741550', photo: 'img/noimage.png' },
    ];

    var Odisha = [
        { name: 'श्री खीरसागर नायक', city: 'ओडिशा', post: 'State Conveners', contact: '9938429086', photo: 'img/noimage.png' },
    ];

    var MadhyaPradesh = [
        { name: 'ईआर. दीपेंद्र नायक', city: 'मध्य प्रदेश', post: 'State Conveners', contact: '9826612007', photo: 'img/noimage.png' },
    ];

    var Chhattisgarh = [
        { name: 'श्री प्रवीण नायक', city: 'छत्तीसगढ़', post: 'State Conveners', contact: '7906082157', photo: 'img/noimage.png' },
    ];

    var Gujarat = [
        { name: 'प्रो. गोवर्धन बंजारा', city: 'गुजरात', post: 'State Conveners', contact: '9998305819', photo: 'img/noimage.png' },
    ];

    var Panjab = [
        { name: 'प्रो. मोहन त्यागी', city: 'पंजाब', post: 'State Conveners', contact: '9814479150', photo: 'img/noimage.png' },
    ];

    var UtaraKhand = [
        { name: 'श्री अजीत सिंह नायक', city: 'उत्तराखंड', post: 'State Conveners', contact: '9627138155/ 9412583931', photo: 'img/noimage.png' },
    ];

    var Tripura = [
        { name: 'डॉ. संदीप राठौड़, आईएएस', city: 'त्रिपुरा', post: 'State Conveners', contact: 'XXXX XXXX XX', photo: 'img/noimage.png' },
    ];

    var JammuKashmir = [
        { name: 'श्री योगेश कुमार', city: 'जम्मू और काश्मीर', post: 'State Conveners', contact: '9796495858', photo: 'img/noimage.png' },
    ];

    var WestBengal = [
        { name: 'श्री अमित राठौड़, आईपीएस', city: 'पश्चिम बंगाल', post: 'State Conveners', contact: 'XXXX XXXX XX', photo: 'img/noimage.png' },
    ];

    var Rajasthan = [
        { name: 'श्री अशोक बंजारा', city: 'राजस्‍थान', post: 'State Conveners', contact: '9350070012', photo: 'img/noimage.png' },
    ];

    var queryString = window.location.search;
    var params = {};
    var queryStringParts = queryString.substring(1).split('&');

    for (var i = 0; i < queryStringParts.length; i++) {
        var paramParts = queryStringParts[i].split('=');
        var key = decodeURIComponent(paramParts[0]);
        var value = decodeURIComponent(paramParts[1]);
        params[key] = value;
    }

    var selectedState = params.name;
    $('#stateMemberHeading').text(`Meet Our ${selectedState} State Committee Members`);

    if (selectedState == 'Maharashtra') {
        bindMembers(maharashtra);
    } else if (selectedState == 'Delhi') {
        bindMembers(delhi);
    } else if (selectedState == 'Telagana') {
        bindMembers(telagana);
    } else if (selectedState == 'AndhraPradesh') {
        bindMembers(AndhraPradesh);
    } else if (selectedState == 'Karnataka') {
        bindMembers(Karnataka);
    } else if (selectedState == 'UttarPradesh') {
        bindMembers(UttarPradesh);
    } else if (selectedState == 'Hariyana') {
        bindMembers(Hariyana);
    } else if (selectedState == 'TamilNadu') {
        bindMembers(TamilNadu);
    } else if (selectedState == 'Kerala') {
        bindMembers(Kerala);
    } else if (selectedState == 'Odisha') {
        bindMembers(Odisha);
    } else if (selectedState == 'MadhyaPradesh') {
        bindMembers(MadhyaPradesh);
    } else if (selectedState == 'Chhattisgarh') {
        bindMembers(Chhattisgarh);
    } else if (selectedState == 'Gujarat') {
        bindMembers(Gujarat);
    } else if (selectedState == 'Panjab') {
        bindMembers(Panjab);
    } else if (selectedState == 'UtaraKhand') {
        bindMembers(UtaraKhand);
    } else if (selectedState == 'Tripura') {
        bindMembers(Tripura);
    } else if (selectedState == 'JammuKashmir') {
        bindMembers(JammuKashmir);
    } else if (selectedState == 'WestBengal') {
        bindMembers(WestBengal);
    } else if (selectedState == 'Rajasthan') {
        bindMembers(Rajasthan);
    }

    function bindMembers(showMembers) {
        $('#memberList').html('');

        for (var i = 0; i < showMembers.length; i++) {
            var m = showMembers[i];
            var member = `<div class="col-md-6 col-lg-3 text-center team mb-4">
<div class="team-item rounded overflow-hidden mb-2">
    <div class="bg-secondary p-4">
        <h5>${m.name}</h5>
        <h6 class="m-0">${m.city}</h6>
        <p class="m-0">${m.post}</p>
        <p class="m-0">${m.contact}</p>
    </div>
</div>
</div>`;

            $('#memberList').append(member);
        }
    }


});