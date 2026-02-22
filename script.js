
    var currentTab = "All";

    function updateCounts() {
      var cards = document.getElementsByClassName("job-card");
      var total = 0, 
      interview = 0,
      rejected = 0;

      for (var i = 0; i < cards.length; i++) {
        total++;
        var status = cards[i].getAttribute("data-status");
        if (status == "Interview") interview++;
        if (status == "Rejected") rejected++;
      }

      document.getElementById("totalCount").innerText = total;
      document.getElementById("interviewCount").innerText = interview;
      document.getElementById("rejectedCount").innerText = rejected;
    }

    function setInterview(id) {
      var card = document.querySelector("[data-id='" + id + "']");
      var status = card.getAttribute("data-status");
      card.setAttribute("data-status", status=="Interview"?"All":"Interview");
      updateBadge(card);
      filterCards();
      updateCounts();
    }

    function setRejected(id) {
      var card = document.querySelector("[data-id='" + id + "']");
      var status = card.getAttribute("data-status");
      card.setAttribute("data-status", status=="Rejected"?"All":"Rejected");
      updateBadge(card);
      filterCards();
      updateCounts();
    }

    function updateBadge(card) {
      var status = card.getAttribute("data-status");
      var badgeContainer = card.querySelector(".badge-container");
      badgeContainer.innerHTML = "";
      if(status=="Interview"){
        var span = document.createElement("span");
        span.className = "inline-block  bg-green-400 text-white px-3 py-2 rounded text-S";
        span.innerText = "Interview";
        badgeContainer.appendChild(span);
      } else if(status=="Rejected"){
        var span = document.createElement("span");
        span.className = "inline-block  bg-red-400 text-white px-3 py-2 rounded text-s";
        span.innerText = "Rejected";
        badgeContainer.appendChild(span);
      }
    }

    function deleteJob(id){
      var card = document.querySelector("[data-id='" + id + "']");
      card.remove();
      updateCounts();
      filterCards();
    }

    function changeTab(tab){
      currentTab = tab;
      var tabs = document.getElementsByClassName("tab");
      for(var i=0;i<tabs.length;i++){
        tabs[i].classList.remove("bg-blue-500","text-white");
        tabs[i].classList.add("bg-gray-300");
      }
      event.target.classList.remove("bg-gray-300");
      event.target.classList.add("bg-blue-500","text-white");
      filterCards();
    }

    function filterCards(){
      var cards = document.getElementsByClassName("job-card");
      var count = 0;
      for(var i=0;i<cards.length;i++){
        var status = cards[i].getAttribute("data-status");
        if(currentTab=="All" || status==currentTab){
          cards[i].style.display="block";
          count++;
        } else{
          cards[i].style.display="none";
        }
      }
      document.getElementById("tabCount").innerText = count + " Jobs";
      document.getElementById("emptyMessage").classList.toggle("hidden", count>0);
    }

    updateCounts();
  