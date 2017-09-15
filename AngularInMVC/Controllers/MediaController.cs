using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularInMVC.Controllers
{
    public class MediaController : Controller
    {
        // GET: Media
        public ActionResult Upload()
        {
            return View();
        }

        [Route("SearchMedia")]
        public ActionResult SearchMedia() {
            return View();
        }

        public PartialViewResult SearchPartial()
        {
            return PartialView();
        }
    }
}