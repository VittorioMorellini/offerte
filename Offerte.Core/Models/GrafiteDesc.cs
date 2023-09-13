using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class GrafiteDesc
{
    public short Id { get; set; }

    public short IdLingua { get; set; }

    public string? Descrizione { get; set; }
}
