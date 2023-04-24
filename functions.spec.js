
// Possible phone numbers
//     10 digits, e.g. 0797899236
//     With dashes, e.g. 079-879-9236
//     With spaces, e.g. 079 879 9236
//     With dots, e.g. 079.879.9236
//     With area code parenthesized, e.g. (079) 879 9236 (optional)
// Create test cases: Input and expected result.

//=> true

//isPhoneNumber("079-879-9236")
//=> true

//isPhoneNumber("079 879 9236")
//=> true

//isPhoneNumber("079.879.9236")
//=> true

//isPhoneNumber("")
//=> false

//isPhoneNumber("444")
//=> false

//isPhoneNumber("6056580590")
//=> false

//isPhoneNumber("(079) 879 9236")
//=> true

//isPhoneNumber("(079( 879 9236")
//=> true


