function checkFriendship() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const result = document.getElementById('result');

    if (name1 === "" || name2 === "") {
        result.textContent = "Please enter both names!";
        return;
    }

    const isFriend = Math.random() < 0.5; // 50% chance of being friends

    if (isFriend) {
        result.textContent = `${name1} and ${name2} are friends! 🎉`;
    } else {
        result.textContent = `${name1} and ${name2} are not friends. 😢`;
    }
}