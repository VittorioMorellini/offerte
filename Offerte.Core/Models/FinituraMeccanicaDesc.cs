using System;
using System.Collections.Generic;

namespace Offerte.Core.Models;

public partial class FinituraMeccanicaDesc
{
    public long Id { get; set; }

    public long IdLingua { get; set; }

    public string? Descrizione { get; set; }

    public virtual Lingua IdLinguaNavigation { get; set; } = null!;

    public virtual FinituraMeccanica IdNavigation { get; set; } = null!;
}
