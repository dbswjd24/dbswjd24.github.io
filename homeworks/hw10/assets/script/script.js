function hideAllOutfits() {
    var outfits = document.getElementsByClassName('outfit');
    for (var i = 0; i < outfits.length; i++) {
        outfits[i].style.display = 'none';
    }
}

function dressDrizzy(outfitId) {
    hideAllOutfits();
    document.getElementById('body').style.display = 'none';
    document.getElementById(outfitId).style.display = 'block';
}

document.getElementById('s1').addEventListener('click', function() {
    dressDrizzy('o1');
});

document.getElementById('s2').addEventListener('click', function() {
    dressDrizzy('o2');
});

document.getElementById('s3').addEventListener('click', function() {
    dressDrizzy('o3');
});

document.getElementById('s4').addEventListener('click', function() {
    dressDrizzy('o4');
});

document.getElementById('s5').addEventListener('click', function() {
    dressDrizzy('o5');
});

document.getElementById('strip-button').addEventListener('click', function() {
    hideAllOutfits();
    document.getElementById('body').style.display = 'block';
});
