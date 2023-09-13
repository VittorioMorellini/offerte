using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Solder
{
    public short Id { get; set; }

    public string Descrizione { get; set; } = null!;
}
