using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class Serigrafia
{
    public long Id { get; set; }

    public string Descrizione { get; set; } = null!;

    public virtual ICollection<Offerta> Offerta { get; set; } = new List<Offerta>();

    public virtual ICollection<SerigrafiaDesc> SerigrafiaDesc { get; set; } = new List<SerigrafiaDesc>();
}
