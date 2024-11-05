window.onload = function() {
    if (!localStorage.getItem('privacyBannerShown')) {
        alert("Questo sito utilizza i cookie per migliorare l'esperienza utente.");
        localStorage.setItem('privacyBannerShown', 'true');
    }
};