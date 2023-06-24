import { useEffect, useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);
    const [name, setName] = useState("Aya");

    function addAngka() {
        setAngka(angka + 1);
    }
    function addName() {
        setName("Cahaya");
    }

    useEffect(function () {
        console.log("Berjalan Saat Pada Life-Cycle Mount and Update");

        document.title = `Angka: ${angka}`;
    }, [angka]
    );

    console.log("Berjalan Saat Pada Life-Cycle Render");

    return (
        <div>
            <p>Nilai Angka: {angka}</p>
            <button onClick={addAngka}>Added</button>
            <p>Name: {name}</p>
            <button onClick={addName}>Added</button>
        </div>
    )
}

export default Counter;