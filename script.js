// --- DATA ---
const commands = [
  {
    name: "alias",
    desc: "Create a shortcut for a longer command.",
    gif: "https://placehold.co/600x400/333/fff?text=alias",
  },
  {
    name: "cat",
    desc: "Concatenate and display files.",
    gif: "https://placehold.co/600x400/333/fff?text=cat",
  },
  {
    name: "cd",
    desc: "Change the current directory.",
    gif: "https://i.imgur.com/9qK9bYF.gif",
  },
  {
    name: "chmod",
    desc: "Change file access permissions.",
    gif: "https://placehold.co/600x400/333/fff?text=chmod",
  },
  {
    name: "chown",
    desc: "Change file owner and group.",
    gif: "https://placehold.co/600x400/333/fff?text=chown",
  },
  {
    name: "cp",
    desc: "Copy files and directories.",
    gif: "https://placehold.co/600x400/333/fff?text=cp",
  },
  {
    name: "curl",
    desc: "Transfer data from or to a server.",
    gif: "https://placehold.co/600x400/333/fff?text=curl",
  },
  {
    name: "df",
    desc: "Display free disk space.",
    gif: "https://placehold.co/600x400/333/fff?text=df",
  },
  {
    name: "diff",
    desc: "Compare files line by line.",
    gif: "https://placehold.co/600x400/333/fff?text=diff",
  },
  {
    name: "du",
    desc: "Estimate file space usage.",
    gif: "https://placehold.co/600x400/333/fff?text=du",
  },
  {
    name: "find",
    desc: "Search for files in a directory hierarchy.",
    gif: "https://placehold.co/600x400/333/fff?text=find",
  },
  {
    name: "free",
    desc: "Display amount of free and used memory.",
    gif: "https://placehold.co/600x400/333/fff?text=free",
  },
  {
    name: "grep",
    desc: "Print lines matching a pattern.",
    gif: "https://placehold.co/600x400/333/fff?text=grep",
  },
  {
    name: "head",
    desc: "Output the first part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=head",
  },
  {
    name: "history",
    desc: "Display the command history list.",
    gif: "https://placehold.co/600x400/333/fff?text=history",
  },
  {
    name: "kill",
    desc: "Send a signal to a process.",
    gif: "https://placehold.co/600x400/333/fff?text=kill",
  },
  {
    name: "less",
    desc: "View file content one page at a time.",
    gif: "https://placehold.co/600x400/333/fff?text=less",
  },
  {
    name: "ln",
    desc: "Create links between files.",
    gif: "https://placehold.co/600x400/333/fff?text=ln",
  },
  {
    name: "locate",
    desc: "Find files by name, faster than find.",
    gif: "https://placehold.co/600x400/333/fff?text=locate",
  },
  {
    name: "ls",
    desc: "List directory contents.",
    gif: "https://i.imgur.com/3yS3b3Y.gif",
  },
  {
    name: "man",
    desc: "Display the manual for a command.",
    gif: "https://placehold.co/600x400/333/fff?text=man",
  },
  {
    name: "mkdir",
    desc: "Make directories.",
    gif: "https://i.imgur.com/S8i6c6a.gif",
  },
  {
    name: "mv",
    desc: "Move or rename files.",
    gif: "https://placehold.co/600x400/333/fff?text=mv",
  },
  {
    name: "ping",
    desc: "Test the connection to a network host.",
    gif: "https://placehold.co/600x400/333/fff?text=ping",
  },
  {
    name: "ps",
    desc: "Report a snapshot of the current processes.",
    gif: "https://placehold.co/600x400/333/fff?text=ps",
  },
  {
    name: "pwd",
    desc: "Print name of current/working directory.",
    gif: "https://i.imgur.com/AY8Z3So.gif",
  },
  {
    name: "rm",
    desc: "Remove files or directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rm",
  },
  {
    name: "rmdir",
    desc: "Remove empty directories.",
    gif: "https://placehold.co/600x400/333/fff?text=rmdir",
  },
  {
    name: "scp",
    desc: "Securely copy files between hosts.",
    gif: "https://placehold.co/600x400/333/fff?text=scp",
  },
  {
    name: "sort",
    desc: "Sort lines of text files.",
    gif: "https://placehold.co/600x400/333/fff?text=sort",
  },
  {
    name: "ssh",
    desc: "Secure Shell client (remote login program).",
    gif: "https://placehold.co/600x400/333/fff?text=ssh",
  },
  {
    name: "sudo",
    desc: "Execute a command as another user.",
    gif: "https://placehold.co/600x400/333/fff?text=sudo",
  },
  {
    name: "tail",
    desc: "Output the last part of files.",
    gif: "https://placehold.co/600x400/333/fff?text=tail",
  },
  {
    name: "tar",
    desc: "Store, list or extract files in an archive.",
    gif: "https://placehold.co/600x400/333/fff?text=tar",
  },
  {
    name: "top",
    desc: "Display Linux processes.",
    gif: "https://placehold.co/600x400/333/fff?text=top",
  },
  {
    name: "touch",
    desc: "Change file timestamps or create empty files.",
    gif: "https://placehold.co/600x400/333/fff?text=touch",
  },
  {
    name: "uname",
    desc: "Print system information.",
    gif: "https://placehold.co/600x400/333/fff?text=uname",
  },
  {
    name: "wc",
    desc: "Print newline, word, and byte counts.",
    gif: "https://placehold.co/600x400/333/fff?text=wc",
  },
  {
    name: "wget",
    desc: "Non-interactive network downloader.",
    gif: "https://placehold.co/600x400/333/fff?text=wget",
  },
  {
    name: "whoami",
    desc: "Print effective user ID.",
    gif: "https://placehold.co/600x400/333/fff?text=whoami",
  },
];

// --- DYNAMIC CONTENT & EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("commandsGrid");
  const searchInput = document.getElementById("searchInput");
  const findCommandBtn = document.getElementById("findCommandBtn");

  // Populate the grid with command cards
  commands.forEach((command) => {
    const card = document.createElement("div");
    card.className =
      "command-card bg-white rounded-lg shadow-md overflow-hidden";
    card.innerHTML = `
            <div class="p-6 card-content">
                <h2 class="text-2xl font-bold mb-2">${command.name}</h2>
                <p class="text-gray-600 mb-4">${command.desc}</p>
                <button class="explain-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    ✨ Explain This
                </button>
                <div class="explanation-container mt-4"></div>
            </div>
            <div class="bg-gray-50 p-4">
                <img src="${command.gif}" alt="${command.name} command gif" class="w-full rounded-md" onerror="this.onerror=null;this.src='https://placehold.co/600x400/000000/FFFFFF?text=${command.name}+command';">
            </div>
        `;
    // Add event listener directly to the button
    card.querySelector(".explain-btn").addEventListener("click", function () {
      getExplanation(command.name, this);
    });
    grid.appendChild(card);
  });

  // Set up Intersection Observer for card animations
  const cards = document.querySelectorAll(".command-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, index * 50);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  // Add event listeners for search and AI finder
  searchInput.addEventListener("keyup", searchCommands);
  findCommandBtn.addEventListener("click", findCommand);
});

// --- FUNCTIONS ---

// Function to handle searching for commands
function searchCommands() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("command-card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h2")[0];
    if (title) {
      let textValue = title.textContent || title.innerText;
      if (textValue.toLowerCase().indexOf(input) > -1) {
        cards[i].style.display = "flex";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}

// Function for the AI Command Finder
async function findCommand() {
  const userInput = document.getElementById("naturalInput").value;
  const resultContainer = document.getElementById("finderResult");

  if (!userInput.trim()) {
    resultContainer.innerHTML = `<div class="explanation-box visible text-yellow-800" style="background-color: #fefce8; border-left-color: #facc15;">Please describe what you want to do.</div>`;
    return;
  }

  resultContainer.innerHTML = '<div class="loader"></div>';

  const prompt = `You are a Linux command expert. A user wants to perform a task. Based on their description, provide the single most appropriate Linux command or a short, piped command chain to accomplish it. Explain briefly what the command does.

User's task: "${userInput}"

Your response should be in HTML format. Provide the command inside a <pre><code> block for proper formatting, and the explanation in a paragraph below it.`;

  const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
  const payload = { contents: chatHistory };
  const apiKey = ""; // API key is handled by the environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();

    let resultText = "Sorry, I couldn't find a command for that right now.";
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      resultText = result.candidates[0].content.parts[0].text;
    }

    resultContainer.innerHTML = `<div class="explanation-box visible">${resultText}</div>`;
  } catch (error) {
    console.error("Error finding command:", error);
    resultContainer.innerHTML = `<div class="explanation-box visible text-red-700">Error: Could not process request. Please try again later.</div>`;
  }
}

// Function to get an explanation for a specific command
async function getExplanation(commandName, buttonElement) {
  const explanationContainer = buttonElement.nextElementSibling;

  if (explanationContainer.innerHTML.trim() !== "") {
    explanationContainer.innerHTML = "";
    return;
  }

  explanationContainer.innerHTML = '<div class="loader"></div>';
  buttonElement.disabled = true;
  buttonElement.classList.add("opacity-50", "cursor-not-allowed");

  const prompt = `Explain the Linux command '${commandName}' in simple, beginner-friendly terms. Describe what it's used for and explain its 2 or 3 most common options or flags. Format the response in HTML with a main paragraph and an unordered list for the flags.`;

  const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
  const payload = { contents: chatHistory };
  const apiKey = ""; // API key is handled by the environment
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();

    let explanationText = "Sorry, I couldn't get an explanation right now.";
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      explanationText = result.candidates[0].content.parts[0].text;
    }

    const explanationBox = document.createElement("div");
    explanationBox.className = "explanation-box";
    explanationBox.innerHTML = explanationText;

    explanationContainer.innerHTML = "";
    explanationContainer.appendChild(explanationBox);

    setTimeout(() => {
      explanationBox.classList.add("visible");
    }, 10);
  } catch (error) {
    console.error("Error fetching explanation:", error);
    explanationContainer.innerHTML = `<div class="explanation-box visible text-red-700">Error: Could not fetch explanation. Please try again later.</div>`;
  } finally {
    buttonElement.disabled = false;
    buttonElement.classList.remove("opacity-50", "cursor-not-allowed");
  }
}
