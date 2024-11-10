var participants = 1;

function addParticipant() {
    participants += 1;
    // document.querySelector("#add").remove();
    // document.querySelector(".participants").innerHTML += newParticipantInfoTemplate();
    // document.querySelector("#add").addEventListener("click", addParticipant);
    const html = newParticipantInfoTemplate();
    document.querySelector("#add").insertAdjacentHTML("beforebegin", html);
}

function newParticipantInfoTemplate() {
    return `
        <section class="participant${participants}">
            <p>Participant ${participants}</p>
            <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee">Fee ($)<span>*</span></label>
                <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date">Desired Date <span>*</span></label>
                <input id="date" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total = 0;
    feeElements.forEach(fee => {
        total += Number(fee.value);
    });
    // once you have your total make sure to return it!
    return total;    
}

function info() {
    return {
        name: document.querySelector("#adult_name").value,
        num_of_participants: participants,
        fee: totalFees(),
    }
}

function successTemplate(info) {
    return `
    <p>Thank you ${info.name} for registering. You have registered ${info.num_of_participants} participants and owe $${info.fee} in Fees.</p>
    
    `
}

function submitForm(event) {
    console.log("submitted");
    event.preventDefault();
    // do the rest of the stuff
    document.querySelector(".testbox").style.display = "none";
    document.querySelector("body").innerHTML += successTemplate(info());
}

document.querySelector("#add").addEventListener("click", addParticipant);
document.querySelector("form").addEventListener("submit", submitForm);