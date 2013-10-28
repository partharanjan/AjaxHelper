AjaxHelper
==========

Jquery Ajax in object

AjaxHelper class is a pure object oriented Javascript class for typical ajax in Jquery.

This class is light weight and better in performance.

How To Use
===========
            var sAjax = new AjaxHelper(URL);
            sAjax.Data = "{PARAM1:123}";
            sAjax.OnInit=function()
            {
              //init code
            }
            sAjax.OnSuccess = function (data) {
                if (data != null) {
                    //do on success
                }
            }
            sAjax.OnError:function(data)
            {
              //error code
            }
            sAjax.OnException(data)
            {
              //on exception
            }
            sAjax.Init();
