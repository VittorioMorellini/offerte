﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using Offerte.Core.Services;
using Offerte.Utils;

namespace Offerte.Api.Controllers
{
    //[Authorize]
    [Route("auth/identity")]
    public class IdentityController : Controller
    {
        private IIdentityService service;
        public IdentityController(IIdentityService service)
        {
            this.service = service;
        }

        [HttpGet]
        [Route("{username}/{password}")]
        public IActionResult Authenticate(string username, string password)
        {
            return ServiceResult.Execute(() => service.Authenticate(username, password));
        }

        //[HttpGet]
        //[Route("authenticate/{username}/{password}")]
        //public IActionResult Authenticate(string username, string password)
        //{
        //    var response = service.Authenticate(username, password);

        //    if (response == null)
        //        return BadRequest(new { message = "Username or password is incorrect" });

        //    return Ok(response);
        //}
        //[HttpGet("filter")]
        //public IActionResult Filter()
        //{
        //    return ServiceResult.Execute(() => service.GetFilter());
        //}     
    }
}
