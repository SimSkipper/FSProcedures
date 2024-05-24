function toggleItemColor(item) {
    // Toggle color class for the entire row
    var row = item.parentNode;
    row.classList.toggle('untoggled');
    row.classList.toggle('toggled');
}
