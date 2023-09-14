using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class SerigrafiaDesc
{
    public long Id { get; set; }

    public long IdLingua { get; set; }

    public string? Descrizione { get; set; }

    public virtual Lingua IdLinguaNavigation { get; set; } = null!;

    public virtual Serigrafia IdNavigation { get; set; } = null!;
}
