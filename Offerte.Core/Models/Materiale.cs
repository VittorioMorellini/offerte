using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Materiale
{
    public short Id { get; set; }

    public string? Descrizione { get; set; }

    public string? Codice { get; set; }
}
