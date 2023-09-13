using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class AgenteGruppo
{
    public int Id { get; set; }

    public short IdAgente { get; set; }

    public short IdGruppo { get; set; }

    public short? Ausilio { get; set; }
}
