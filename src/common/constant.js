module.exports={
    ERROR_CODES:{
        STATUS_NOT_MODIFIED:{
            HTTP_CODE:304,
            MESSAGE:'Status Not Modified'
        },
        PARAM_MISSING:{
            HTTP_CODE:401,
            MESSAGE:'Request Parameter Missing.'
        },
        FAILED_UPDATE_DATABASE:{
            HTTP_CODE:500,
            MESSAGE:'Failed to Update DataBase.'
        },
        FAILED_READ_DATABASE:{
            HTTP_CODE:500,
            MESSAGE:'Failed to Retrive Data from DataBase.'
        },
        UNEXPECTED_ERROR: {
            HTTP_CODE: 500,
            MESSAGE: 'An unexpected error occur, please try again later!',
        },
        

    }
}