
document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen HTML
  const todoForm = document.querySelector("#todoForm");
  const taskInput = document.querySelector("#taskInput");
  const inputError = document.querySelector("#inputError");
  const todoList = document.querySelector("#todoList");
  const taskCounter = document.querySelector("#taskCounter");
  const clearCompleted = document.querySelector("#clearCompleted");

  // Membaca dan menyimpan data tugas
  const getTasks = () => {
    return JSON.parse(localStorage.getItem("todo_tasks")) || [];
  };

  const saveTasks = (tasks) => {
    localStorage.setItem("todo_tasks", JSON.stringify(tasks));
  };

  // Fitur 1: Menghitung jumlah seluruh tugas
  const updateCounter = (tasks) => {
    const total = tasks.length;
    const selesai = tasks.filter(task => task.completed).length;
    const belumSelesai = total - selesai;

    taskCounter.textContent =
      `Total: ${total} Tugas | Selesai: ${selesai} | Belum Selesai: ${belumSelesai}`;
  };

  // Menampilkan daftar tugas
  const renderTasks = () => {
    const tasks = getTasks();

    // Penghitung diperbarui setiap kali daftar berubah
    updateCounter(tasks);

    todoList.innerHTML = "";

    if (tasks.length === 0) {
      const emptyMessage = document.createElement("li");
      emptyMessage.className = "empty-message";
      emptyMessage.textContent = "Belum ada tugas tersimpan.";
      todoList.appendChild(emptyMessage);
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `todo-item ${task.completed ? "completed" : ""}`;

      const taskText = document.createElement("span");
      taskText.className = "todo-text";
      taskText.textContent = task.text;

      const actions = document.createElement("div");
      actions.className = "todo-actions";

      const completeBtn = document.createElement("button");
      completeBtn.type = "button";
      completeBtn.className = "action-btn complete-btn";
      completeBtn.dataset.index = index;
      completeBtn.textContent = task.completed ? "Batal" : "Selesai";

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "action-btn delete-btn";
      deleteBtn.dataset.index = index;
      deleteBtn.textContent = "Hapus";

      actions.appendChild(completeBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(taskText);
      li.appendChild(actions);

      todoList.appendChild(li);
    });
  };

  // Menambahkan tugas baru
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    // Validasi minimal 3 karakter
    if (taskText.length < 3) {
      taskInput.classList.add("error");
      inputError.style.display = "block";
      taskInput.focus();
      return;
    }

    taskInput.classList.remove("error");
    inputError.style.display = "none";

    const tasks = getTasks();
    tasks.push({
      text: taskText,
      completed: false
    });

    saveTasks(tasks);
    taskInput.value = "";
    renderTasks();
    taskInput.focus();
  });

  // Menyembunyikan pesan error saat pengguna mengetik
  taskInput.addEventListener("input", () => {
    if (taskInput.value.trim().length >= 3) {
      taskInput.classList.remove("error");
      inputError.style.display = "none";
    }
  });

  // Menangani tombol Selesai, Batal, dan Hapus
  todoList.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button || button.dataset.index === undefined) {
      return;
    }

    const index = Number(button.dataset.index);
    const tasks = getTasks();

    if (!tasks[index]) {
      return;
    }

    if (button.classList.contains("complete-btn")) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks(tasks);
      renderTasks();
    }

    // Fitur 3: Konfirmasi sebelum menghapus tugas
    else if (button.classList.contains("delete-btn")) {
      const yakin = confirm(
        `Apakah Anda yakin ingin menghapus tugas "${tasks[index].text}"?`
      );

      if (yakin) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
      }
    }
  });

  // Fitur 2: Menghapus hanya tugas yang sudah selesai
  clearCompleted.addEventListener("click", () => {
    const tasks = getTasks();
    const jumlahSelesai = tasks.filter(task => task.completed).length;

    if (jumlahSelesai === 0) {
      alert("Tidak ada tugas selesai yang perlu dibersihkan.");
      return;
    }

    const yakin = confirm(
      `Apakah Anda yakin ingin menghapus ${jumlahSelesai} tugas yang sudah selesai?`
    );

    if (!yakin) {
      return;
    }

    const tugasBelumSelesai = tasks.filter(
      task => !task.completed
    );

    saveTasks(tugasBelumSelesai);
    renderTasks();
  });

  // Menampilkan data saat halaman pertama kali dibuka
  renderTasks();
});
