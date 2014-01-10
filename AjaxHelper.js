/*
License: Free
Date: 14-11-2013
Author: Partha Ranjan Nayak
AjaxHelper
*/
function AjaxHelper(req_url) {
    this.Type = "GET";
    this.Async = true;
    this.Cache = false;
    this.Url = req_url;
    this.Data = "";
    this.OnSuccess = function (data) { }
    this.OnError = function (data) { }
    this.OnException = function (data) { }
    this.OnInit = function () { }
}

//set parameter
AjaxHelper.prototype.SetParam = function (name, value) {
    var total = name.length;
    if (total > 0) {
        var str = "";
        for (var i = 0; i < total; i++) {
            str = name[i] + ":" + value[i] + ",";
        }
        //remove last comma
        str = str.substr(0, str.length - 1);
        this.Data = "{" + str + "}";
    }
}

//start ajax request
AjaxHelper.prototype.Init = function () {
    try {
        /*this obj store the object of current object
        becuase in ajax it this is treat as object of the jquery ajax
        */
        var obj = this;
        //Start the beign request
        obj.OnInit();
        //start ajax calling
        $.ajax({
            type: obj.Type,
            async: obj.Async,
            cache: obj.Cache,
            contentType: "application/json; charset=utf-8",
            url: obj.Url,
            data: obj.Data,
            dataType: "json",
            success: function (successData) {
                
                obj.OnSuccess(successData);
            },
            error: function (errorData) {
                obj.OnError(errorData.d);
            }
        });
    }
    catch (e) {
        obj.OnException(e);
    }
}
