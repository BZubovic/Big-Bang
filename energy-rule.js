/* Energy label is shown only on phones and white goods (window.BBEnergy.allowed(name)). */
(function(){
  var YES = /(mobitel|mobilni telefon|pametni telefon|smartphone|galaxy [asz]\d|iphone|xiaomi|redmi|honor|motorola|hladnjak|frižider|zamrzivač|ledenica|vinsk|klima|perilica|sušilica|štednjak|pećnica|ploča|napa|mikroval|bojler|grijač vode|perilic)/i;
  var NO = /(maska|futrola|zaštitno staklo|staklo za|folija|punjač|kabel|adapter|držač|slušalic|narukvic|sat |smartwatch|tablet)/i;
  window.BBEnergy = { allowed: function(name){ name = String(name || ''); return YES.test(name) && !NO.test(name); } };
})();
