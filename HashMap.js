var groupSession_information = {
  'serviceCode': [{
      'displayName': 'serviceCode_aaa',
      'alias':'aaa'
    }, {
        'displayName': 'serviceCode_bbb',
        'alias': 'bbb'
    },
    {
        'displayName': 'serviceCode_ccc',
        'alias': 'ccc'
    },
    {
        'displayName': 'serviceCode_ddd',
        'alias': 'ddd'
    }],

  'placeOfService': [{
      'displayName': 'placeOfService_aaa',
      'alias':'aaa'
    }, {
        'displayName': 'placeOfService_bbb',
        'alias': 'bbb'
    }, {
        'displayName': 'placeOfService_ccc',
        'alias': 'ccc'
    },
    {
        'displayName': 'placeOfService_ddd',
        'alias': 'ddd'
    }],

  'outsideFacility': [{
      'displayName': 'outsideFacility_aaa',
      'alias':'aaa'
    }, {
        'displayName': 'outsideFacility_bbb',
        'alias': 'bbb'
    }],

  'appointmentType': [{
      'displayName': 'appointmentType_aaa',
      'alias':'aaa'
    }, {
        'displayName': 'appointmentType_bbb',
        'alias': 'bbb'
    }]
};

var GroupSelectedValues = {
 	 	'serviceCode':'aaa',
 	 	'placeOfService': 'bbb',
 	 	'outsideFacility': 'ccc',
    'appointmentType': ''
};

var configGroupValues = {
  'placeOfService' : {'defaultValue': 'bbb', 'isRequired': false},
  'outsideFacility' : {'defaultValue': '', 'isRequired': true},
  'appointmentType': {'defaultValue': 'hi', 'isRequired': true},
  'serviceCode': {'defaultValue':'', 'isRequired': true}
}

var makeOurCodeSetFunction= function(configGroupValues, groupSession_information, GroupSelectedValues){
  var megaObject = {};

  for (var GroupFeild in configGroupValues){
      megaObject[GroupFeild] = {};
      megaObject[GroupFeild].optionValues=groupSession_information[GroupFeild];
      megaObject[GroupFeild].displayValue = GroupSelectedValues[GroupFeild] ? GroupSelectedValues[GroupFeild]
                                            : configGroupValues[GroupFeild].defaultValue;
  }
  console.log(megaObject);
};


makeOurCodeSetFunction(configGroupValues, groupSession_information, GroupSelectedValues);
//
// 172	    - placeOfService
// 173	    - outsideFacility
// 174	    - personContacted
// 175	    - appointmentType
// 176	    - contactType
// 177	    - billingType
// 178	    - intensityType
// 179	    - ebpSS
