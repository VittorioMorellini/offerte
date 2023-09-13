using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Gruppo
{
    public short Id { get; set; }

    public string? Descrizione { get; set; }

    public bool DirittoSede { get; set; }
}
