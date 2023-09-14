using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class FinituraSuperficiale
{
    public long Id { get; set; }

    public string Descrizione { get; set; } = null!;

    public virtual ICollection<FinituraSuperficialeDesc> FinituraSuperficialeDesc { get; set; } = new List<FinituraSuperficialeDesc>();

    public virtual ICollection<Offerta> Offerta { get; set; } = new List<Offerta>();
}
