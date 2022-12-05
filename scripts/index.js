// write js code here corresponding to index.html
// You should add submit event on the form
import { Navbar } from "../Components/Navbar.js";

let navbar = document.getElementById("navbar");
navbar.innerHTML = Navbar()

let form = document.querySelector("#masaiForm");

form.addEventListener('submit',SendFormData);
let Matches = JSON.parse(localStorage.getItem("scheduling")) || [];
function SendFormData(e){
    e.preventDefault();
    let MatchNumber = document.getElementById("matchNum").value;
    let TeamA = document.getElementById("teamA").value;
    let TeamB = document.getElementById("teamB").value;
    let date = document.getElementById("date").value;
    let venue = document.getElementById("venue").value;
   if(MatchNumber=='' || TeamA=='' || TeamB=='' || date=='' || venue==''){
    alert("please fill all the details");
   }else{
    let match = {
        MatchNumber : MatchNumber,
        TeamA : TeamA,
        TeamB : TeamB,
        date : date,
        venue : venue
    }
    Matches.push(match);
    localStorage.setItem('scheduling',JSON.stringify(Matches));
    alert("Successfully Scheduled");
   }
}