/*
Author: Partha Ranjan Nayak
AjaxHelper
http://partha.pw
*/
function AjaxHelper(req_url) {
    this.Type = "GET";
    this.Async = true;
    this.Cache = false;
    this.Url = req_url;
    this.ContentType="application/json; charset=utf-8";
    this.Data = "";
    this.DataType='json';
    this.OnSuccess = function (data) { }
    this.OnError = function (data) { }
    this.OnException = function (data) { }
    this.OnInit = function () { }
}
//set content Type
AjaxHelper.prototype.setType=function(flag)
{
    if(flag=='get')
	{
		this.Type = "GET";
		this.ContentType="application/json; charset=utf-8";
	    this.DataType='json';
	}
    else if(flag=='post')
	{
		this.Type = "POST";
		this.ContentType="application/x-www-form-urlencoded; charset=UTF-8";
	    this.DataType='html';
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
            contentType: obj.ContentType,
            url: obj.Url,
            data: obj.Data,
            dataType: obj.DataType,
            success: function (successData) {
                obj.OnSuccess(successData);
            },
            error: function (errorData) {
                obj.OnError(errorData);
            }
        });
    }
    catch (e) {
        obj.OnException(e);
    }
}
