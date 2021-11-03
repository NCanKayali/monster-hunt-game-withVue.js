new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsOn: false,
        logs: [],
        logsText: {
            playerAttack: "Oyuncu atağı...",
            specialPlayerAttack: "Özel oyuncu atağı...",
            healthUp: "İlk yardım...",
            giveUp: "Oyuncu pes etti!!!",
            mounsterAttack: "Canavar atağı..."
        },
        attackMultiple: 10,
        specialAttackMultiple: 15,
        healthUpMultiple: 20,
        mounsterAttackMultiple: 15
    },
    methods: {
        startGame() {
            this.gameIsOn = true;
        },
        attack() {
            let point = Math.ceil(Math.random() * this.attackMultiple)
            this.mounsterAttack();
            this.addToLog({ turn: "p", text: this.logsText.playerAttack + point })
            this.monsterHealth -= point
        },
        specialAttack() {
            let point = Math.ceil(Math.random() * this.specialAttackMultiple)
            this.mounsterAttack();
            this.addToLog({ turn: "p", text: this.logsText.specialPlayerAttack + point })
            this.monsterHealth -= point
        },
        healthUp() {
            let point = Math.ceil(Math.random() * this.healthUpMultiple)
            this.mounsterAttack();
            this.addToLog({ turn: "p", text: this.logsText.healthUp + point })
            this.playerHealth += point

        },
        giveUp() {
            this.playerHealth = 0;
            this.addToLog({ turn: "p", text: this.logsText.giveUp + point })
        },
        mounsterAttack() {
            let point = Math.ceil(Math.random() * this.mounsterAttackMultiple)
            this.playerHealth -= point
            this.addToLog({ turn: "m", text: this.logsText.mounsterAttack + point })
        },
        addToLog(log) {
            this.logs.push(log)
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0) {
                this.playerHealth = 0
                if (confirm("Oyunu kaybettin... Tekrar denemek ister misin?")) {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.logs = [];

                }
            }
            else if (value > 100) {
                this.playerHealth = 100

            }
        },
        monsterHealth(value) {
            if (value <= 0) {
                this.monsterHealth = 0
                if (confirm("Oyunu kazandın... Tekrar denemek ister misin?")) {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.logs = [];

                }
            }
        }
    },
    computed: {
        playerProgress() {
            return {
                width: this.playerHealth + "%"
            }
        },
        monsterProgress() {
            return {
                width: this.monsterHealth + "%"
            }
        }
    }
})

function friendlyNumber(number1, number2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i
            console.log("sum1" + " " + sum1);

        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 += i
            console.log("sum2" + " " +sum2);

        }
    }
    if (number1 == sum2 && number2 == sum1) {
        console.log(`${number1} ${number2} Arkadaş Sayıdır`)
    } else {
        console.log(`${number1} ${number2} Arkadaş Sayı Değildir`)
    }

}

friendlyNumber(220, 284)