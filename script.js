/**
 * TASKORA — Осознанный AI-менеджер времени и баланса (Zen Edition)
 * Inspired by Google Calendar, Google Tasks, Obsidian & Genshin Impact
 * Full Client Logic: Zero Emojis in UI, Collision-Free Calendar, Popovers, Modals
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) DICTIONARIES
     ========================================================================== */
  const I18N = {
    ru: {
      zen_tag: 'Zen',
      nav_today: 'Сегодня',
      nav_matrix: 'Матрица',
      nav_calendar: 'Календарь',
      nav_profile: 'Профиль',
      balance_title: 'Work/Life Баланс',
      balance_calm: 'День в гармонии',
      balance_good: 'Баланс в норме',
      zen_phrase: 'Фокус на важном без спешки',
      ask_ai: 'AI Ассистент',
      ai_assistant: 'AI Ассистент',
      add_placeholder: 'Добавить дело или мысль...',
      scan_photo: 'Распознать фото',
      add: 'Добавить',
      today_title: 'Сегодня',
      plan_ready: 'План составлен осознанно',
      plan_all_done: 'Все задачи дня завершены. Время для отдыха и восстановления',
      now_label: 'ТЕКУЩИЙ ФОКУС',
      now_subtext: 'Одно главное дело без мультизадачности',
      next_label: 'СПИСОК ДЕЛ',
      completed_label: 'Завершённые задачи',
      empty_today: 'Пока всё чисто и спокойно',
      empty_today_desc: 'Добавьте задачу обычной фразой или позвольте AI распределить день',
      add_task: 'Добавить задачу',
      matrix_title: 'Матрица Эйзенхауэра 2×2',
      matrix_subtitle: 'Гармоничное разделение на срочное и стратегически важное',
      ai_rebalance: 'AI Балансировка',
      q1_name: 'Сделать сейчас',
      q1_meta: 'Срочно и Важно (Дедлайны)',
      q2_name: 'Стратегия и Баланс',
      q2_meta: 'Не срочно, но Важно (Спорт, развитие, отдых)',
      q3_name: 'Сократить',
      q3_meta: 'Срочно, но Менее важно (Рутина, звонки)',
      q4_name: 'Убрать шум',
      q4_meta: 'Не срочно и Не важно (Пожиратели времени)',
      calendar_title: 'Календарь',
      cal_day: 'День',
      cal_week: 'Неделя',
      add_event: 'Занятость',
      add_event_text: 'Занятость',
      confirm_plan: 'Подтвердить план',
      plan_confirmed: 'План утверждён и бережно сохранён в календаре',
      ai_draft_banner: 'Черновик расписания — свободные буферы сохранены для отдыха',
      replan_btn: 'Пересчитать',
      fix_schedule: 'Авто-разрешение',
      stat_done_week: 'Выполнено за неделю',
      stat_streak: 'Серия осознанности',
      streak_safe_note: 'День отдыха защищает серию без штрафов',
      stat_xp: 'Фокус и Гармония',
      settings_preferences: 'Настройки интерфейса',
      theme_label: 'Тема оформления',
      theme_desc: 'Глубокая тёмная, чистая светлая или авто',
      theme_light: 'Светлая',
      theme_dark: 'Тёмная',
      theme_system: 'Системная',
      lang_label: 'Язык приложения',
      lang_desc: 'Мгновенный перевод интерфейса',
      ai_limits: 'AI-запросы на день',
      gcal_desc: 'Импорт внешних встреч и занятости',
      connect: 'Подключить',
      connected: 'Подключено',
      data_privacy: 'Данные и приватность',
      export_json: 'Резервная копия',
      export_desc: 'Скачать все задачи и расписание в формате JSON',
      download_json: 'Скачать JSON',
      reset_samples: 'Сброс к демо',
      reset_samples_desc: 'Восстановить демонстрационные задачи и гармоничный день',
      restore_demo: 'Сбросить',
      delete_account: 'Очистить аккаунт',
      delete_account_desc: 'Безвозвратное удаление всех локальных данных',
      delete_all: 'Удалить всё',
      create_title: 'Новая задача',
      create_input_hint: 'Что нужно сделать? Напишите одно дело или список через запятую...',
      ai_auto_extract: 'AI сам подберёт дедлайн и баланс',
      chip_due: 'Срок:',
      chip_duration: 'Длительность:',
      chip_quadrant: 'Квадрант:',
      quadrant_auto: 'Осознанный авто-выбор',
      cancel: 'Отмена',
      save: 'Сохранить',
      ai_draft: 'Черновик от AI',
      ai_draft_desc: 'AI распознал задачи. Проверьте детали перед включением в расписание дня.',
      reject: 'Отклонить',
      accept_selected: 'Добавить выбранные',
      task_details: 'Детали задачи',
      task_title_label: 'Название задачи',
      task_note_label: 'Заметка / Описание',
      postpone: 'Осознанный перенос:',
      postpone_today: 'На сегодня',
      postpone_tomorrow: 'На завтра',
      postpone_weekend: 'На выходные',
      delete: 'Удалить',
      ai_welcome: 'Здравствуйте! Я помогу сбалансировать задачи, перестроить день без стресса или выделить время для отдыха.',
      prompt_delay: '«Не успеваю, перестрой план мягко»',
      prompt_english: '«Найди 2ч на английский без спешки»',
      prompt_priorities: '«Главный фокус на сегодня»',
      chat_placeholder: 'Спросите AI или попросите изменить план...',
      photo_scan_title: 'Сканирование списка дел',
      dropzone_prompt: 'Перетащите сюда фото блокнота или скриншот чата',
      select_file: 'Выбрать файл',
      ocr_scanning: 'AI анализирует рукописный или печатный текст...',
      demo_samples: 'Примеры для теста:',
      sample_exam: 'Учебный план',
      sample_work: 'Рабочие задачи',
      add_busy_interval: 'Занятый интервал',
      event_title: 'Событие (пара, встреча, спорт, дорога)',
      start_time: 'Начало',
      end_time: 'Окончание',
      skip: 'Пропустить',
      onboarding_promise: '«Скажи, что нужно сделать, — получи реалистичный и спокойный план»',
      login_google: 'Войти через Google',
      login_email: 'Продолжить с email',
      onboarding_step2_title: 'Выберите комфортную тему',
      onboarding_step2_desc: 'Вы всегда сможете настроить это позже в профиле',
      continue: 'Продолжить',
      onboarding_step3_title: 'Что у вас на уме?',
      onboarding_step3_desc: 'Напишите любые задачи своими словами, AI бережно составит день',
      insert_sample: 'Вставить баланс-пример',
      generate_first_plan: 'Построить гармоничный день',
      undo: 'Отменить',
      task_deleted: 'Задача удалена',
      task_restored: 'Задача возвращена в список',
      plan_recalculated: 'Расписание мягко пересчитано AI',
      level_label: 'Уровень',
      tasks_count: 'задач'
    },
    en: {
      zen_tag: 'Zen',
      nav_today: 'Today',
      nav_matrix: 'Matrix',
      nav_calendar: 'Calendar',
      nav_profile: 'Me',
      balance_title: 'Work/Life Balance',
      balance_calm: 'Harmonious Day',
      balance_good: 'Healthy Balance',
      zen_phrase: 'Focus on what matters without rush',
      ask_ai: 'AI Assistant',
      ai_assistant: 'AI Assistant',
      add_placeholder: 'Add a task or thought...',
      scan_photo: 'Scan photo',
      add: 'Add',
      today_title: 'Today',
      plan_ready: 'Mindful schedule created',
      plan_all_done: 'All tasks completed for today. Time to rest and recharge',
      now_label: 'CURRENT FOCUS',
      now_subtext: 'Single main focus without multitasking',
      next_label: 'TASK LIST',
      completed_label: 'Completed Tasks',
      empty_today: 'Everything is calm and clear',
      empty_today_desc: 'Add a task in your own words or let AI organize your day',
      add_task: 'Add task',
      matrix_title: '2×2 Eisenhower Matrix',
      matrix_subtitle: 'Harmonious separation of urgency and strategic value',
      ai_rebalance: 'AI Rebalance',
      q1_name: 'Do now',
      q1_meta: 'Urgent & Important (Deadlines)',
      q2_name: 'Strategy & Balance',
      q2_meta: 'Not urgent, but Important (Health, gym, growth)',
      q3_name: 'Delegate',
      q3_meta: 'Urgent, less Important (Calls, errands)',
      q4_name: 'Drop noise',
      q4_meta: 'Not urgent & Not important (Time sinks)',
      calendar_title: 'Calendar',
      cal_day: 'Day',
      cal_week: 'Week',
      add_event: 'Busy time',
      add_event_text: 'Busy time',
      confirm_plan: 'Confirm plan',
      plan_confirmed: 'Plan confirmed and scheduled peacefully',
      ai_draft_banner: 'AI Draft Schedule — free buffer slots preserved for rest',
      replan_btn: 'Replan',
      fix_schedule: 'Auto-resolve',
      stat_done_week: 'Completed this week',
      stat_streak: 'Mindful streak',
      streak_safe_note: 'Rest day preserves your streak without penalty',
      stat_xp: 'Focus & Harmony',
      settings_preferences: 'Interface Settings',
      theme_label: 'Color Theme',
      theme_desc: 'Deep dark, pure light, or synced with system',
      theme_light: 'Light',
      theme_dark: 'Dark',
      theme_system: 'System',
      lang_label: 'App Language',
      lang_desc: 'Instant translation across the app',
      ai_limits: 'Daily AI requests',
      gcal_desc: 'Sync external meetings and schedule',
      connect: 'Connect',
      connected: 'Connected',
      data_privacy: 'Data & Privacy',
      export_json: 'Backup Data',
      export_desc: 'Download tasks and schedule as JSON',
      download_json: 'Download JSON',
      reset_samples: 'Demo Data',
      reset_samples_desc: 'Restore initial sample tasks and balanced day',
      restore_demo: 'Reset',
      delete_account: 'Clear Account',
      delete_account_desc: 'Permanent erasure of all local data',
      delete_all: 'Delete everything',
      create_title: 'New Task',
      create_input_hint: 'What needs doing? Type one task or list separated by commas...',
      ai_auto_extract: 'AI will assign deadline & balance automatically',
      chip_due: 'Due:',
      chip_duration: 'Duration:',
      chip_quadrant: 'Quadrant:',
      quadrant_auto: 'Mindful Auto-assign',
      cancel: 'Cancel',
      save: 'Save',
      ai_draft: 'AI Draft',
      ai_draft_desc: 'AI extracted your tasks. Review details before scheduling.',
      reject: 'Reject',
      accept_selected: 'Add Selected',
      task_details: 'Task Details',
      task_title_label: 'Task title',
      task_note_label: 'Note / Description',
      postpone: 'Mindful reschedule:',
      postpone_today: 'To today',
      postpone_tomorrow: 'To tomorrow',
      postpone_weekend: 'To weekend',
      delete: 'Delete',
      ai_welcome: 'Hello! I help balance your schedule without stress, leaving healthy space for rest.',
      prompt_delay: '«Running late, gently replan my day»',
      prompt_english: '«Find 2h for English without rush»',
      prompt_priorities: '«Main focus for today»',
      chat_placeholder: 'Ask AI or request gentle changes...',
      photo_scan_title: 'Scan Task List',
      dropzone_prompt: 'Drop a photo of your notebook or chat screenshot here',
      select_file: 'Select file',
      ocr_scanning: 'AI is analyzing handwriting and printed text...',
      demo_samples: 'Demo examples:',
      sample_exam: 'Study plan',
      sample_work: 'Project tasks',
      add_busy_interval: 'Busy Interval',
      event_title: 'Event (class, lecture, workout, commute)',
      start_time: 'Start',
      end_time: 'End',
      skip: 'Skip',
      onboarding_promise: '“Say what needs doing — get a realistic, calm plan”',
      login_google: 'Sign in with Google',
      login_email: 'Continue with Email',
      onboarding_step2_title: 'Choose Comfortable Theme',
      onboarding_step2_desc: 'You can always update this anytime in profile',
      continue: 'Continue',
      onboarding_step3_title: 'What’s on your mind?',
      onboarding_step3_desc: 'Write any tasks in your own words, AI will draft your day',
      insert_sample: 'Insert balance sample',
      generate_first_plan: 'Create balanced day',
      undo: 'Undo',
      task_deleted: 'Task deleted',
      task_restored: 'Task restored',
      plan_recalculated: 'Schedule gently replanned by AI',
      level_label: 'Level',
      tasks_count: 'tasks'
    }
  };

  function getPluralRU(number, one, few, many) {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return `${number} ${many}`;
    if (n1 > 1 && n1 < 5) return `${number} ${few}`;
    if (n1 === 1) return `${number} ${one}`;
    return `${number} ${many}`;
  }

  function formatTaskCount(count, locale) {
    if (locale === 'ru') {
      return getPluralRU(count, 'задача', 'задачи', 'задач');
    }
    return count === 1 ? '1 task' : `${count} tasks`;
  }

  /* ==========================================================================
     2. BALANCED SEED DATA (Work/Life Harmony)
     ========================================================================== */
  const SEED_DATA = {
    user: {
      name: 'Осознанный пользователь',
      email: 'user@taskora.uz',
      locale: 'ru',
      theme: 'system',
      xp: 380,
      streak: 5,
      level: 3,
      aiQuotaUsed: 4,
      aiQuotaTotal: 20,
      gcalConnected: false
    },
    tasks: [
      {
        id: 'task-1',
        title: 'Подготовка к экзамену по экономике',
        note: 'Главы 4-7, кейсы по монетарной политике',
        due_at: '2026-10-29T11:00',
        time_slot: '09:00 - 11:00',
        duration_min: 120,
        quadrant: 1,
        status: 'todo',
        source: 'manual',
        ai_confidence: 0.98,
        ai_reason: 'Близкий дедлайн экзамена — главный академический приоритет',
        is_today: true
      },
      {
        id: 'task-2',
        title: 'Купить свежие продукты на неделю',
        note: 'Овощи, фрукты, крупы, орехи',
        due_at: '2026-10-29T13:30',
        time_slot: '13:00 - 13:45',
        duration_min: 45,
        quadrant: 2,
        status: 'todo',
        source: 'text',
        ai_confidence: 0.92,
        ai_reason: 'Здоровое питание и забота о себе (Квадрант II: Баланс)',
        is_today: true
      },
      {
        id: 'task-3',
        title: 'Спортзал: разминка и тренировка',
        note: 'Кардио 20 мин + растяжка',
        due_at: '2026-10-29T18:00',
        time_slot: '18:00 - 19:15',
        duration_min: 75,
        quadrant: 2,
        status: 'todo',
        source: 'text',
        ai_confidence: 0.95,
        ai_reason: 'Физическое восстановление и энергия для предотвращения выгорания',
        is_today: true
      },
      {
        id: 'task-4',
        title: 'Отправить драфт презентации куратору',
        note: 'Прикрепить PDF и тезисы',
        due_at: '2026-10-29T16:30',
        time_slot: '16:00 - 17:00',
        duration_min: 60,
        quadrant: 1,
        status: 'todo',
        source: 'text',
        ai_confidence: 0.96,
        ai_reason: 'Важный дедлайн проекта до вечера',
        is_today: true
      },
      {
        id: 'task-5',
        title: 'Ответить на рабочие сообщения в Telegram',
        note: 'Короткие ответы за один подход',
        due_at: '2026-10-29T17:15',
        time_slot: '17:15 - 17:45',
        duration_min: 30,
        quadrant: 3,
        status: 'todo',
        source: 'manual',
        ai_confidence: 0.88,
        ai_reason: 'Операционная переписка — упакована в 30-минутный слот',
        is_today: true
      },
      {
        id: 'task-6',
        title: 'Вечерняя прогулка и чтение книги',
        note: '30 минут без гаджетов перед сном',
        due_at: '2026-10-29T21:00',
        time_slot: '20:30 - 21:15',
        duration_min: 45,
        quadrant: 2,
        status: 'todo',
        source: 'manual',
        ai_confidence: 0.95,
        ai_reason: 'Качественный вечерний отдых для глубокого сна',
        is_today: true
      },
      {
        id: 'task-7',
        title: 'Утренняя медитация и план на день',
        note: '15 минут спокойного фокуса',
        due_at: '2026-10-29T08:00',
        time_slot: '08:00 - 08:20',
        duration_min: 20,
        quadrant: 2,
        status: 'done',
        source: 'manual',
        ai_confidence: 1.0,
        ai_reason: 'Утренний ритуал выполнен',
        is_today: true
      }
    ],
    events: [
      {
        id: 'evt-1',
        title: 'Лекция: Макроэкономика (Ауд. 302)',
        start_time: '11:15',
        end_time: '12:45'
      },
      {
        id: 'evt-2',
        title: 'Встреча по командному проекту',
        start_time: '14:30',
        end_time: '15:45'
      }
    ],
    planStatus: 'draft'
  };

  /* ==========================================================================
     3. APP STATE & CORE
     ========================================================================== */
  const AppState = {
    user: null,
    tasks: [],
    events: [],
    planStatus: 'draft',
    currentTab: 'today',
    calendarView: 'day',
    matrixFilter: 'all',
    deletedTaskBuffer: null,
    undoTimer: null,
    pendingDraftTasks: null,

    init() {
      const savedTasks = localStorage.getItem('taskora_tasks');
      const savedUser = localStorage.getItem('taskora_user');
      const savedEvents = localStorage.getItem('taskora_events');
      const savedPlan = localStorage.getItem('taskora_plan');

      if (savedTasks && savedUser) {
        this.tasks = JSON.parse(savedTasks);
        this.user = JSON.parse(savedUser);
        this.events = savedEvents ? JSON.parse(savedEvents) : SEED_DATA.events;
        this.planStatus = savedPlan || 'draft';
      } else {
        this.resetToSeed();
      }

      if (!localStorage.getItem('taskora_user')) {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (browserLang === 'en') this.user.locale = 'en';
      }

      this.applyTheme(this.user.theme);
      this.updateTranslations();
      this.renderCurrentDate();

      if (!localStorage.getItem('taskora_onboarded')) {
        this.showOnboarding();
      }
    },

    save() {
      localStorage.setItem('taskora_tasks', JSON.stringify(this.tasks));
      localStorage.setItem('taskora_user', JSON.stringify(this.user));
      localStorage.setItem('taskora_events', JSON.stringify(this.events));
      localStorage.setItem('taskora_plan', this.planStatus);
    },

    resetToSeed() {
      this.tasks = JSON.parse(JSON.stringify(SEED_DATA.tasks));
      this.user = JSON.parse(JSON.stringify(SEED_DATA.user));
      this.events = JSON.parse(JSON.stringify(SEED_DATA.events));
      this.planStatus = SEED_DATA.planStatus;
      this.save();
    },

    applyTheme(theme) {
      this.user.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      this.save();

      document.querySelectorAll('#theme-selector .segment-btn, #onboarding-theme-control .segment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.themeVal === theme);
      });
    },

    setLocale(lang) {
      if (!I18N[lang]) return;
      this.user.locale = lang;
      document.documentElement.lang = lang;
      this.save();

      document.querySelectorAll('#lang-selector .segment-btn, #onboarding-lang-control .segment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langVal === lang);
      });

      this.updateTranslations();
      this.renderCurrentDate();
      this.render();
    },

    updateTranslations() {
      const lang = this.user.locale || 'ru';
      const dict = I18N[lang];

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) el.placeholder = dict[key];
      });

      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (dict[key]) el.title = dict[key];
      });
    },

    renderCurrentDate() {
      const now = new Date();
      const locale = this.user.locale === 'en' ? 'en-US' : 'ru-RU';
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      const formatted = new Intl.DateTimeFormat(locale, options).format(now);
      const displayEl = document.getElementById('current-date-display');
      if (displayEl) {
        displayEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
      }
    },

    showOnboarding() {
      const overlay = document.getElementById('onboarding-overlay');
      if (overlay) overlay.classList.remove('hidden');
    },

    closeOnboarding() {
      const overlay = document.getElementById('onboarding-overlay');
      if (overlay) overlay.classList.add('hidden');
      localStorage.setItem('taskora_onboarded', 'true');
    },

    render() {
      this.renderTodayView();
      this.renderMatrixView();
      this.renderCalendarView();
      this.renderProfileView();
    },

    /* ========================================================================
       4. CRUD OPERATIONS
       ======================================================================== */
    createTask(taskData) {
      const newTask = {
        id: 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        title: taskData.title.trim(),
        note: taskData.note || '',
        due_at: taskData.due_at || new Date().toISOString().slice(0, 16),
        time_slot: taskData.time_slot || '',
        duration_min: parseInt(taskData.duration_min, 10) || 60,
        quadrant: parseInt(taskData.quadrant, 10) || 2, // Default Q2: Strategy & Balance
        status: 'todo',
        source: taskData.source || 'manual',
        ai_confidence: taskData.ai_confidence || 0.95,
        ai_reason: taskData.ai_reason || (this.user.locale === 'en' ? 'Planned with healthy balance buffer' : 'Запланировано с буфером для отдыха'),
        is_today: true,
        created_at: new Date().toISOString()
      };

      this.tasks.unshift(newTask);
      this.save();
      this.render();
      this.showStatusToast(this.user.locale === 'en' ? 'Task created' : 'Задача добавлена в день');
      return newTask;
    },

    updateTask(id, updates) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return;
      Object.assign(task, updates);
      this.save();
      this.render();
    },

    deleteTask(id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index === -1) return;

      const [removedTask] = this.tasks.splice(index, 1);
      this.deletedTaskBuffer = { task: removedTask, index };
      this.save();
      this.render();

      this.showUndoToast(removedTask.title);
    },

    restoreDeletedTask() {
      if (!this.deletedTaskBuffer) return;
      const { task, index } = this.deletedTaskBuffer;
      this.tasks.splice(index, 0, task);
      this.deletedTaskBuffer = null;
      this.save();
      this.render();
      this.hideUndoToast();
      this.showStatusToast(I18N[this.user.locale].task_restored);
    },

    toggleTaskDone(id) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return;

      const wasDone = task.status === 'done';
      task.status = wasDone ? 'todo' : 'done';

      if (!wasDone) {
        this.user.xp += 20;
        this.showStatusToast('+20 Focus XP');
      } else {
        this.user.xp = Math.max(0, this.user.xp - 20);
      }

      this.save();
      this.render();
    },

    postponeTask(id, days) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return;

      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + days);
      task.due_at = targetDate.toISOString().slice(0, 16);
      if (days > 0) task.is_today = false;

      this.save();
      this.render();
      this.showStatusToast(this.user.locale === 'en' ? 'Gently postponed' : 'Задача мягко перенесена');
    },

    /* ========================================================================
     5. TODAY VIEW (Zen Minimalist & Compact Fold)
     ======================================================================== */
    renderTodayView() {
      const todayTasks = this.tasks.filter(t => t.is_today && !t.deleted_at);
      const doneTasks = todayTasks.filter(t => t.status === 'done');
      const pendingTasks = todayTasks.filter(t => t.status !== 'done');

      const total = todayTasks.length;
      const done = doneTasks.length;
      const percent = total === 0 ? 0 : Math.round((done / total) * 100);

      const counterEl = document.getElementById('today-counter');
      const fillEl = document.getElementById('today-progress-fill');
      const subTitleEl = document.getElementById('today-progress-subtitle');
      const lang = this.user.locale;

      if (counterEl) {
        counterEl.textContent = `${done} ${lang === 'en' ? 'of' : 'из'} ${total} ${lang === 'en' ? 'completed' : 'выполнено'}`;
      }
      if (fillEl) {
        fillEl.style.width = `${percent}%`;
        fillEl.parentElement.setAttribute('aria-valuenow', percent);
      }
      if (subTitleEl) {
        if (total > 0 && done === total) {
          subTitleEl.textContent = I18N[lang].plan_all_done;
        } else {
          subTitleEl.textContent = I18N[lang].plan_ready;
        }
      }

      const emptyStateEl = document.getElementById('today-empty-state');
      const nowSectionEl = document.getElementById('now-section');
      const nextSectionEl = document.querySelector('.next-section');
      const completedSectionEl = document.getElementById('completed-section');

      if (todayTasks.length === 0) {
        if (emptyStateEl) emptyStateEl.classList.remove('hidden');
        if (nowSectionEl) nowSectionEl.style.display = 'none';
        if (nextSectionEl) nextSectionEl.style.display = 'none';
        if (completedSectionEl) completedSectionEl.style.display = 'none';
        return;
      } else {
        if (emptyStateEl) emptyStateEl.classList.add('hidden');
        if (nowSectionEl) nowSectionEl.style.display = 'block';
        if (nextSectionEl) nextSectionEl.style.display = 'block';
        if (completedSectionEl) completedSectionEl.style.display = 'block';
      }

      // NOW Card (Priority Q1, or top pending item)
      const nowContainer = document.getElementById('now-task-container');
      const nowTask = pendingTasks.find(t => t.quadrant === 1) || pendingTasks[0];

      if (nowContainer) {
        if (nowTask) {
          nowContainer.innerHTML = this.buildTaskCardHTML(nowTask, true);
        } else {
          nowContainer.innerHTML = `
            <div class="task-card" style="opacity: 0.75;">
              <span style="font-size: 13px; color: var(--text-muted);">
                ${lang === 'en' ? 'No urgent pressure right now. Perfect time for rest or creative planning.' : 'Срочных задач нет. Отличное время для отдыха или спокойного планирования.'}
              </span>
            </div>
          `;
        }
      }

      // NEXT List
      const nextList = document.getElementById('today-task-list');
      const nextTasks = nowTask ? pendingTasks.filter(t => t.id !== nowTask.id) : pendingTasks;

      const nextCountBadge = document.getElementById('next-tasks-count');
      if (nextCountBadge) {
        nextCountBadge.textContent = formatTaskCount(nextTasks.length, lang);
      }

      if (nextList) {
        nextList.innerHTML = nextTasks.map(t => this.buildTaskCardHTML(t, false)).join('');
      }

      // COMPLETED List
      const completedList = document.getElementById('completed-task-list');
      const completedCountEl = document.getElementById('completed-count');
      if (completedCountEl) completedCountEl.textContent = doneTasks.length;

      if (completedList) {
        completedList.innerHTML = doneTasks.map(t => this.buildTaskCardHTML(t, false)).join('');
      }
    },

    buildTaskCardHTML(task, isNow = false) {
      const isDone = task.status === 'done';
      const qClass = `quadrant-chip-${task.quadrant}`;
      const romanNumerals = ['', 'I', 'II', 'III', 'IV'];
      const qText = romanNumerals[task.quadrant];
      const timeDisplay = task.time_slot || (task.due_at ? task.due_at.slice(11, 16) : '—');

      return `
        <div class="task-card ${isNow ? 'now-task-card' : ''} ${isDone ? 'is-done' : ''}" data-task-id="${task.id}">
          <div class="task-check-circle" data-action="toggle-done" data-task-id="${task.id}" title="${isDone ? 'Отметить невыполненной' : 'Отметить выполненной'}"></div>
          
          <div class="task-content" data-action="edit-task" data-task-id="${task.id}">
            <div class="task-title">${this.escapeHTML(task.title)}</div>
            <div class="task-meta">
              <span class="meta-chip ${qClass}">Q${qText}</span>
              <span class="meta-chip">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                ${timeDisplay}
              </span>
              ${task.duration_min ? `<span class="meta-chip">${task.duration_min} мин</span>` : ''}
              ${task.note ? `<span class="meta-chip" title="${this.escapeHTML(task.note)}">Заметка</span>` : ''}
            </div>
          </div>

          <div class="task-actions">
            <button class="btn-task-action" data-action="postpone" data-task-id="${task.id}" title="Перенести на завтра">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </button>
            <button class="btn-task-action delete-action" data-action="delete" data-task-id="${task.id}" title="Удалить">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>
      `;
    },

    /* ========================================================================
       6. MATRIX VIEW (2×2 with Mobile Filter Tabs)
       ======================================================================== */
    renderMatrixView() {
      const quadrants = [1, 2, 3, 4];
      quadrants.forEach(q => {
        const card = document.querySelector(`.quadrant-card.q${q}`);
        const dropzone = document.getElementById(`q${q}-dropzone`);
        if (!dropzone) return;

        // Check mobile filter
        if (card) {
          if (this.matrixFilter === 'all' || this.matrixFilter === String(q)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }

        const qTasks = this.tasks.filter(t => t.quadrant === q && t.status !== 'done');
        dropzone.innerHTML = qTasks.map(t => `
          <div class="matrix-task-item" draggable="true" data-task-id="${t.id}">
            <div class="matrix-task-row">
              <span class="matrix-task-title">${this.escapeHTML(t.title)}</span>
              <button class="matrix-task-why-btn" data-task-id="${t.id}" title="Логика приоритета">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </button>
            </div>
            <div class="matrix-task-meta">
              <span>⏱ ${t.duration_min || 60} мин</span>
              ${t.due_at ? `<span>· ${t.due_at.slice(5, 10)}</span>` : ''}
            </div>
          </div>
        `).join('');
      });
    },

    /* ========================================================================
       7. COLLISION-FREE CALENDAR (Google Calendar Aesthetic)
       ======================================================================== */
    renderCalendarView() {
      const board = document.getElementById('calendar-board');
      if (!board) return;

      const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
      const draftBanner = document.getElementById('calendar-draft-banner');
      if (draftBanner) {
        draftBanner.style.display = this.planStatus === 'confirmed' ? 'none' : 'flex';
      }

      let html = `<table class="calendar-timeline-table"><tbody>`;
      hours.forEach(hour => {
        const formattedHour = `${hour.toString().padStart(2, '0')}:00`;
        html += `
          <tr class="time-slot-row" data-hour="${hour}">
            <td class="time-col-header">${formattedHour}</td>
            <td class="time-slot-cell" id="slot-cell-${hour}"></td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      board.innerHTML = html;

      // Collect all scheduled blocks (Events + Tasks)
      const allBlocks = [];

      this.events.forEach(evt => {
        const [sH, sM] = evt.start_time.split(':').map(Number);
        const [eH, eM] = evt.end_time.split(':').map(Number);
        allBlocks.push({
          id: evt.id,
          title: evt.title,
          type: 'event',
          startMin: sH * 60 + sM,
          endMin: eH * 60 + eM,
          timeText: `${evt.start_time} - ${evt.end_time}`
        });
      });

      this.tasks.filter(t => t.is_today && t.time_slot).forEach(task => {
        const [start, end] = task.time_slot.split(' - ');
        if (start && end) {
          const [sH, sM] = start.split(':').map(Number);
          const [eH, eM] = end.split(':').map(Number);
          allBlocks.push({
            id: task.id,
            title: task.title,
            type: 'task',
            quadrant: task.quadrant,
            startMin: sH * 60 + sM,
            endMin: eH * 60 + eM,
            timeText: `${start} - ${end}`
          });
        }
      });

      // Sort by start time
      allBlocks.sort((a, b) => a.startMin - b.startMin);

      // Check Collisions (Audit Fix #5: side-by-side slotting)
      for (let i = 0; i < allBlocks.length; i++) {
        const curr = allBlocks[i];
        const overlapping = [curr];

        for (let j = 0; j < allBlocks.length; j++) {
          if (i !== j) {
            const other = allBlocks[j];
            if (Math.max(curr.startMin, other.startMin) < Math.min(curr.endMin, other.endMin)) {
              overlapping.push(other);
            }
          }
        }

        const isCollision = overlapping.length > 1;
        const colIndex = overlapping.indexOf(curr);
        const colCount = isCollision ? overlapping.length : 1;

        const startH = Math.floor(curr.startMin / 60);
        const startM = curr.startMin % 60;
        const durationMin = curr.endMin - curr.startMin;
        const cell = document.getElementById(`slot-cell-${startH}`);

        if (cell) {
          const topOffset = Math.round((startM / 60) * 52);
          const heightPx = Math.max(28, Math.round((durationMin / 60) * 52) - 3);

          const block = document.createElement('div');
          const isDraft = this.planStatus === 'draft';

          if (curr.type === 'event') {
            block.className = 'calendar-block block-busy';
          } else {
            block.className = `calendar-block ${isDraft ? 'block-draft' : 'block-task'}`;
            block.dataset.taskId = curr.id;
            block.addEventListener('click', () => AppState.openEditTaskModal(curr.id));
          }

          block.style.top = `${topOffset}px`;
          block.style.height = `${heightPx}px`;

          // Apply collision side-by-side positioning
          if (isCollision) {
            const widthPct = (100 / colCount) - 2;
            const leftPct = (100 / colCount) * colIndex + 1;
            block.style.left = `${leftPct}%`;
            block.style.width = `${widthPct}%`;
          } else {
            block.style.left = '6px';
            block.style.right = '6px';
          }

          block.innerHTML = `
            <div class="cal-block-title">${this.escapeHTML(curr.title)}</div>
            <div class="cal-block-time">${curr.timeText}</div>
          `;
          cell.appendChild(block);
        }
      }
    },

    /* ========================================================================
       8. PROFILE & WORK/LIFE METRICS
       ======================================================================== */
    renderProfileView() {
      const nameEl = document.getElementById('profile-display-name');
      const emailEl = document.getElementById('profile-display-email');
      const avatarLarge = document.getElementById('profile-avatar-large');
      const topbarAvatar = document.getElementById('topbar-avatar');

      if (nameEl) nameEl.textContent = this.user.name;
      if (emailEl) emailEl.textContent = this.user.email;

      const initials = this.user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'VU';
      if (avatarLarge) avatarLarge.textContent = initials;
      if (topbarAvatar) topbarAvatar.textContent = initials;

      const streakEl = document.getElementById('stat-streak-count');
      const xpEl = document.getElementById('stat-xp-count');
      const weekCountEl = document.getElementById('stat-weekly-count');

      const completedCount = this.tasks.filter(t => t.status === 'done').length;
      if (weekCountEl) weekCountEl.textContent = completedCount + 14;
      if (streakEl) streakEl.textContent = `${this.user.streak} ${this.user.locale === 'en' ? 'days' : 'дней'}`;
      if (xpEl) xpEl.textContent = `${this.user.xp} XP`;

      const chartContainer = document.getElementById('weekly-mini-chart');
      if (chartContainer) {
        const days = [35, 60, 50, 85, 75, 100, 70];
        chartContainer.innerHTML = days.map((h, idx) => `
          <div class="mini-bar ${idx === 5 ? 'active' : ''}" style="height: ${h}%;" title="День ${idx + 1}"></div>
        `).join('');
      }

      const quotaBadge = document.getElementById('ai-quota-badge');
      const quotaText = document.getElementById('ai-quota-text');
      const remaining = this.user.aiQuotaTotal - this.user.aiQuotaUsed;

      if (quotaBadge) quotaBadge.textContent = `${remaining} ${this.user.locale === 'en' ? 'left' : 'осталось'}`;
      if (quotaText) {
        const lang = this.user.locale;
        quotaText.textContent = lang === 'en'
          ? `Used ${this.user.aiQuotaUsed} of ${this.user.aiQuotaTotal} daily requests`
          : `Использовано ${this.user.aiQuotaUsed} из ${this.user.aiQuotaTotal} запросов`;
      }
    },

    /* ========================================================================
       9. AI NATURAL PARSING & REPLANNING
       ======================================================================== */
    parseNaturalText(text) {
      this.user.aiQuotaUsed++;
      this.save();
      this.renderProfileView();

      const chunks = text
        .split(/(?:,|\n|;|\s+и\s+|\s+and\s+)/)
        .map(c => c.trim())
        .filter(c => c.length > 2);

      return chunks.map(chunk => {
        let title = chunk;
        let due = '2026-10-29T18:00';
        let duration = 60;
        let quadrant = 2; // Strategy & Balance default
        let confidence = 0.94;
        let needsClarification = false;
        let clarificationQuestion = null;

        const lower = chunk.toLowerCase();

        if (lower.includes('экзамен') || lower.includes('дедлайн') || lower.includes('сдать') || lower.includes('срочно')) {
          quadrant = 1;
          confidence = 0.96;
        } else if (lower.includes('спортзал') || lower.includes('тренировка') || lower.includes('английский') || lower.includes('книг') || lower.includes('прогулка') || lower.includes('отдых')) {
          quadrant = 2;
          confidence = 0.95;
        } else if (lower.includes('почт') || lower.includes('сообщени') || lower.includes('ответить') || lower.includes('звонок')) {
          quadrant = 3;
          confidence = 0.88;
        } else if (lower.includes('фильм') || lower.includes('игры') || lower.includes('спам')) {
          quadrant = 4;
          confidence = 0.86;
        }

        if (lower.includes('2 часа') || lower.includes('2ч') || lower.includes('2 hours')) {
          duration = 120;
        } else if (lower.includes('30 минут') || lower.includes('30 мин') || lower.includes('30m')) {
          duration = 30;
        }

        if (lower.includes('утром') || lower.includes('10:00')) {
          due = '2026-10-30T10:00';
        } else if (lower.includes('вечером') || lower.includes('18:00')) {
          due = '2026-10-29T18:00';
        } else if (!lower.match(/\d{1,2}:\d{2}/) && !lower.includes('сегодня') && !lower.includes('завтра')) {
          confidence = 0.76;
          needsClarification = true;
          clarificationQuestion = `В какой интервал дня комфортнее выполнить «${title}»?`;
        }

        return {
          id: 'draft-' + Math.random().toString(36).substr(2, 9),
          title: title.charAt(0).toUpperCase() + title.slice(1),
          due_at: due,
          duration_min: duration,
          quadrant: quadrant,
          confidence: confidence,
          needs_clarification: needsClarification,
          clarification_question: clarificationQuestion,
          selected: true
        };
      });
    },

    openAiDraftModal(draftTasks) {
      const modal = document.getElementById('ai-draft-modal-overlay');
      const countEl = document.getElementById('ai-draft-count');
      const clarifBox = document.getElementById('ai-clarification-box');
      const clarifText = document.getElementById('clarification-question-text');
      const clarifOptions = document.getElementById('clarification-options-container');

      this.pendingDraftTasks = draftTasks;

      if (countEl) countEl.textContent = formatTaskCount(draftTasks.length, this.user.locale);

      const uncertainItem = draftTasks.find(t => t.needs_clarification);
      if (uncertainItem && clarifBox) {
        clarifBox.classList.remove('hidden');
        clarifText.textContent = uncertainItem.clarification_question;
        clarifOptions.innerHTML = `
          <button type="button" class="btn-chip" data-clarify-time="10:00">10:00 (Утром)</button>
          <button type="button" class="btn-chip" data-clarify-time="14:00">14:00 (Днём)</button>
          <button type="button" class="btn-chip" data-clarify-time="18:30">18:30 (Вечером)</button>
        `;

        clarifOptions.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', (e) => {
            uncertainItem.needs_clarification = false;
            uncertainItem.due_at = `2026-10-29T${e.target.dataset.clarifyTime}`;
            uncertainItem.confidence = 0.95;
            clarifBox.classList.add('hidden');
            this.renderAiDraftItems();
          });
        });
      } else if (clarifBox) {
        clarifBox.classList.add('hidden');
      }

      this.renderAiDraftItems();
      if (modal) modal.classList.remove('hidden');
    },

    renderAiDraftItems() {
      const listEl = document.getElementById('ai-draft-items-list');
      if (!listEl) return;

      const roman = ['', 'I (Срочно)', 'II (Баланс)', 'III (Сократить)', 'IV (Убрать шум)'];

      listEl.innerHTML = this.pendingDraftTasks.map((t, idx) => `
        <div class="ai-draft-item">
          <input type="checkbox" class="ai-draft-checkbox" data-index="${idx}" ${t.selected ? 'checked' : ''}>
          <div class="ai-draft-content">
            <div class="ai-draft-title-row">
              <span class="ai-draft-item-title">${this.escapeHTML(t.title)}</span>
              <span class="ai-confidence-tag">${Math.round(t.confidence * 100)}%</span>
            </div>
            <div class="ai-draft-meta-tags">
              <span class="meta-chip">Квадрант ${roman[t.quadrant]}</span>
              <span class="meta-chip">⏱ ${t.duration_min} мин</span>
              ${t.needs_clarification ? `<span class="ai-warn-chip">требуется интервал</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');

      listEl.querySelectorAll('.ai-draft-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.index, 10);
          this.pendingDraftTasks[idx].selected = e.target.checked;
        });
      });
    },

    acceptAiDraft() {
      const selected = (this.pendingDraftTasks || []).filter(t => t.selected);
      selected.forEach(item => {
        this.createTask({
          title: item.title,
          duration_min: item.duration_min,
          quadrant: item.quadrant,
          due_at: item.due_at,
          source: 'text',
          ai_confidence: item.confidence
        });
      });

      const modal = document.getElementById('ai-draft-modal-overlay');
      if (modal) modal.classList.add('hidden');
      this.pendingDraftTasks = null;
      this.showStatusToast(this.user.locale === 'en' ? `${selected.length} tasks scheduled` : `Добавлено ${selected.length} задач`);
    },

    /* ========================================================================
       10. AI CHAT & GENTLE REPLANNING
       ======================================================================== */
    sendAiChatMessage(userMessage) {
      const container = document.getElementById('chat-messages-container');
      if (!container) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user-msg';
      userBubble.textContent = userMessage;
      container.appendChild(userBubble);
      container.scrollTop = container.scrollHeight;

      this.user.aiQuotaUsed++;
      this.save();
      this.renderProfileView();

      setTimeout(() => {
        const lower = userMessage.toLowerCase();
        let aiReplyHTML = '';

        if (lower.includes('не успеваю') || lower.includes('перестрой') || lower.includes('late') || lower.includes('replan')) {
          aiReplyHTML = `
            <p><strong>Расписание мягко скорректировано без стресса:</strong></p>
            <div class="ai-proposal-card">
              <div>🔄 Перенос «Спортзал» на 19:15 (после вечернего чая)</div>
              <div>🔄 Свободный слот для «Подготовки к экзамену» в 16:15</div>
              <div class="ai-risk-item">Дедлайн презентации сохранён в безопасном окне</div>
              <div class="proposal-actions">
                <button class="btn-zen-accent" id="accept-replan-proposal-btn">Принять мягкий план</button>
                <button class="btn-ghost-xs" id="reject-replan-proposal-btn">Отклонить</button>
              </div>
            </div>
          `;
        } else if (lower.includes('английский') || lower.includes('english')) {
          aiReplyHTML = `
            <p>Нашёл комфортный свободный слот завтра без накладок на пары:</p>
            <div class="ai-proposal-card">
              <div>📅 Завтра, 14:00 - 16:00 (2 часа)</div>
              <div>Квадрант II: Стратегия и развитие</div>
              <div class="proposal-actions">
                <button class="btn-primary-xs" id="accept-english-slot-btn">Добавить в день</button>
              </div>
            </div>
          `;
        } else {
          aiReplyHTML = `
            <p>Ваш главный фокус на сегодня — <strong>Подготовка к экзамену</strong> (Квадрант I). Все задачи распределены с запасом на отдых.</p>
          `;
        }

        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble ai-msg';
        aiBubble.innerHTML = aiReplyHTML;
        container.appendChild(aiBubble);
        container.scrollTop = container.scrollHeight;

        const acceptReplan = aiBubble.querySelector('#accept-replan-proposal-btn');
        if (acceptReplan) {
          acceptReplan.addEventListener('click', () => {
            const gymTask = AppState.tasks.find(t => t.title.includes('Спортзал'));
            if (gymTask) gymTask.time_slot = '19:15 - 20:30';
            AppState.save();
            AppState.renderCalendarView();
            AppState.showStatusToast(I18N[AppState.user.locale].plan_recalculated);
            acceptReplan.disabled = true;
            acceptReplan.textContent = '✓ Принято';
          });
        }

        const acceptEnglish = aiBubble.querySelector('#accept-english-slot-btn');
        if (acceptEnglish) {
          acceptEnglish.addEventListener('click', () => {
            AppState.createTask({
              title: 'Занятие английским языком',
              duration_min: 120,
              quadrant: 2,
              time_slot: '14:00 - 16:00',
              due_at: '2026-10-30T14:00'
            });
            acceptEnglish.disabled = true;
            acceptEnglish.textContent = '✓ Добавлено';
          });
        }
      }, 550);
    },

    /* ========================================================================
       11. UI MODALS, POPOVERS & TOASTS
       ======================================================================== */
    openEditTaskModal(id) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return;

      const overlay = document.getElementById('edit-task-modal-overlay');
      document.getElementById('edit-task-id').value = task.id;
      document.getElementById('edit-task-title').value = task.title;
      document.getElementById('edit-task-note').value = task.note || '';
      document.getElementById('edit-task-datetime').value = task.due_at ? task.due_at.slice(0, 16) : '';
      document.getElementById('edit-task-duration').value = task.duration_min || '60';
      document.getElementById('edit-task-quadrant').value = task.quadrant || '2';

      const whyBox = document.getElementById('edit-task-why-text');
      if (whyBox) {
        whyBox.textContent = task.ai_reason || 'Определено с балансом важности и времени на отдых.';
      }

      if (overlay) overlay.classList.remove('hidden');
    },

    showWhyPopover(taskId, targetElement) {
      const task = this.tasks.find(t => t.id === taskId);
      if (!task) return;

      const popover = document.getElementById('ai-why-popover');
      const text = document.getElementById('ai-why-popover-text');
      if (!popover || !text) return;

      text.textContent = task.ai_reason || 'AI подобрал квадрант для поддержания баланса дня.';
      
      const rect = targetElement.getBoundingClientRect();
      popover.style.top = `${rect.bottom + 6}px`;
      popover.style.left = `${Math.max(10, rect.left - 120)}px`;
      popover.classList.remove('hidden');

      const closeHandler = (e) => {
        if (!popover.contains(e.target) && e.target !== targetElement) {
          popover.classList.add('hidden');
          document.removeEventListener('click', closeHandler);
        }
      };
      setTimeout(() => document.addEventListener('click', closeHandler), 10);
    },

    showUndoToast(taskTitle) {
      const toast = document.getElementById('undo-toast');
      const bar = document.getElementById('toast-countdown-bar');
      const text = document.getElementById('toast-message-text');

      if (!toast) return;

      if (text) {
        const lang = this.user.locale;
        text.textContent = lang === 'en' ? `Deleted: "${taskTitle}"` : `Удалено: «${taskTitle}»`;
      }

      toast.classList.remove('hidden');

      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '100%';
        setTimeout(() => {
          bar.style.transition = 'width 8s linear';
          bar.style.width = '0%';
        }, 20);
      }

      if (this.undoTimer) clearTimeout(this.undoTimer);
      this.undoTimer = setTimeout(() => {
        this.hideUndoToast();
        this.deletedTaskBuffer = null;
      }, 8000);
    },

    hideUndoToast() {
      const toast = document.getElementById('undo-toast');
      if (toast) toast.classList.add('hidden');
      if (this.undoTimer) clearTimeout(this.undoTimer);
    },

    showStatusToast(msg) {
      const toast = document.getElementById('status-toast');
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 2200);
    },

    exportDataJSON() {
      const data = {
        user: this.user,
        tasks: this.tasks,
        events: this.events,
        exportDate: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `taskora-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    escapeHTML(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  };

  /* ==========================================================================
     12. EVENT LISTENERS & DOM BINDINGS
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    AppState.init();
    AppState.render();

    // Tab Navigation
    const switchTab = (tabName) => {
      AppState.currentTab = tabName;
      document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(`view-${tabName}`);
      if (targetPanel) targetPanel.classList.add('active');

      document.querySelectorAll('.nav-item, .mob-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
      });

      if (tabName === 'calendar') AppState.renderCalendarView();
      if (tabName === 'matrix') AppState.renderMatrixView();
    };

    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Top Bar Quick Input
    const quickInput = document.getElementById('quick-task-input');
    const quickAddBtn = document.getElementById('quick-add-btn');

    const handleQuickAdd = () => {
      const text = quickInput.value.trim();
      if (!text) return;

      if (text.includes(',') || text.includes(' и ') || text.length > 40) {
        const extracted = AppState.parseNaturalText(text);
        quickInput.value = '';
        AppState.openAiDraftModal(extracted);
      } else {
        AppState.createTask({
          title: text,
          quadrant: 2,
          duration_min: 45
        });
        quickInput.value = '';
      }
    };

    if (quickAddBtn) quickAddBtn.addEventListener('click', handleQuickAdd);
    if (quickInput) {
      quickInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleQuickAdd();
      });
    }

    // Modal Create Bottom Sheet
    const createModal = document.getElementById('create-modal-overlay');
    const openCreateModal = () => {
      if (createModal) {
        createModal.classList.remove('hidden');
        const textarea = document.getElementById('create-task-text');
        if (textarea) {
          textarea.value = '';
          textarea.focus();
        }
      }
    };

    document.getElementById('main-fab')?.addEventListener('click', openCreateModal);
    document.querySelectorAll('.open-create-modal-btn').forEach(btn => {
      btn.addEventListener('click', openCreateModal);
    });

    document.querySelectorAll('.quadrant-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qNum = parseInt(btn.dataset.quadrant, 10);
        openCreateModal();
        const quadSelect = document.getElementById('create-quadrant');
        if (quadSelect) quadSelect.value = qNum;
      });
    });

    const closeCreateModal = () => createModal?.classList.add('hidden');
    document.getElementById('close-create-modal')?.addEventListener('click', closeCreateModal);
    document.getElementById('cancel-create-btn')?.addEventListener('click', closeCreateModal);

    document.getElementById('submit-create-btn')?.addEventListener('click', () => {
      const text = document.getElementById('create-task-text').value.trim();
      if (!text) return;

      const dateVal = document.getElementById('create-due-date').value;
      const timeVal = document.getElementById('create-due-time').value;
      const durationVal = document.getElementById('create-duration').value;
      const quadVal = parseInt(document.getElementById('create-quadrant').value, 10);

      if (text.includes(',') || text.includes(' и ') || text.length > 50) {
        const extracted = AppState.parseNaturalText(text);
        closeCreateModal();
        AppState.openAiDraftModal(extracted);
      } else {
        AppState.createTask({
          title: text,
          due_at: dateVal ? `${dateVal}T${timeVal || '12:00'}` : new Date().toISOString(),
          duration_min: durationVal,
          quadrant: quadVal === 0 ? 2 : quadVal
        });
        closeCreateModal();
      }
    });

    // Task Actions Delegation
    document.addEventListener('click', (e) => {
      const toggleDoneBtn = e.target.closest('[data-action="toggle-done"]');
      if (toggleDoneBtn) {
        e.stopPropagation();
        AppState.toggleTaskDone(toggleDoneBtn.dataset.taskId);
        return;
      }

      const editBtn = e.target.closest('[data-action="edit-task"]');
      if (editBtn) {
        e.stopPropagation();
        AppState.openEditTaskModal(editBtn.dataset.taskId);
        return;
      }

      const deleteBtn = e.target.closest('[data-action="delete"]');
      if (deleteBtn) {
        e.stopPropagation();
        AppState.deleteTask(deleteBtn.dataset.taskId);
        return;
      }

      const postponeBtn = e.target.closest('[data-action="postpone"]');
      if (postponeBtn) {
        e.stopPropagation();
        AppState.postponeTask(postponeBtn.dataset.taskId, 1);
        return;
      }

      const whyBtn = e.target.closest('.matrix-task-why-btn');
      if (whyBtn) {
        e.stopPropagation();
        AppState.showWhyPopover(whyBtn.dataset.taskId, whyBtn);
      }
    });

    // Edit Modal Actions
    const editModal = document.getElementById('edit-task-modal-overlay');
    const closeEditModal = () => editModal?.classList.add('hidden');

    document.getElementById('close-edit-modal')?.addEventListener('click', closeEditModal);
    document.getElementById('cancel-edit-btn')?.addEventListener('click', closeEditModal);

    document.getElementById('save-edit-btn')?.addEventListener('click', () => {
      const id = document.getElementById('edit-task-id').value;
      const title = document.getElementById('edit-task-title').value.trim();
      const note = document.getElementById('edit-task-note').value;
      const datetime = document.getElementById('edit-task-datetime').value;
      const duration = parseInt(document.getElementById('edit-task-duration').value, 10);
      const quadrant = parseInt(document.getElementById('edit-task-quadrant').value, 10);

      if (!title) return;

      AppState.updateTask(id, { title, note, due_at: datetime, duration_min: duration, quadrant });
      closeEditModal();
      AppState.showStatusToast(AppState.user.locale === 'en' ? 'Changes saved' : 'Изменения сохранены');
    });

    document.getElementById('delete-task-btn')?.addEventListener('click', () => {
      const id = document.getElementById('edit-task-id').value;
      closeEditModal();
      AppState.deleteTask(id);
    });

    document.getElementById('postpone-today-btn')?.addEventListener('click', () => {
      AppState.postponeTask(document.getElementById('edit-task-id').value, 0);
      closeEditModal();
    });
    document.getElementById('postpone-tomorrow-btn')?.addEventListener('click', () => {
      AppState.postponeTask(document.getElementById('edit-task-id').value, 1);
      closeEditModal();
    });
    document.getElementById('postpone-weekend-btn')?.addEventListener('click', () => {
      AppState.postponeTask(document.getElementById('edit-task-id').value, 3);
      closeEditModal();
    });

    // Undo Action
    document.getElementById('toast-undo-btn')?.addEventListener('click', () => {
      AppState.restoreDeletedTask();
    });

    // AI Draft Modal
    document.getElementById('accept-ai-draft-btn')?.addEventListener('click', () => AppState.acceptAiDraft());
    document.getElementById('reject-ai-draft-btn')?.addEventListener('click', () => {
      document.getElementById('ai-draft-modal-overlay')?.classList.add('hidden');
    });
    document.getElementById('close-ai-draft-modal')?.addEventListener('click', () => {
      document.getElementById('ai-draft-modal-overlay')?.classList.add('hidden');
    });

    // AI Chat Drawer
    const chatDrawer = document.getElementById('ai-chat-drawer-overlay');
    const openChat = () => chatDrawer?.classList.remove('hidden');
    const closeChat = () => chatDrawer?.classList.add('hidden');

    document.getElementById('header-ai-chat-btn')?.addEventListener('click', openChat);
    document.getElementById('sidebar-ai-btn')?.addEventListener('click', openChat);
    document.getElementById('close-ai-chat-btn')?.addEventListener('click', closeChat);

    const chatInput = document.getElementById('ai-chat-text-input');
    const handleSendChat = () => {
      const val = chatInput.value.trim();
      if (!val) return;
      chatInput.value = '';
      AppState.sendAiChatMessage(val);
    };

    document.getElementById('send-ai-chat-btn')?.addEventListener('click', handleSendChat);
    chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSendChat();
    });

    document.querySelectorAll('.quick-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => AppState.sendAiChatMessage(btn.dataset.prompt));
    });

    // Photo Scanner
    const photoModal = document.getElementById('photo-scanner-modal-overlay');
    const openPhotoScanner = () => {
      if (photoModal) {
        photoModal.classList.remove('hidden');
        document.getElementById('dropzone-empty-view')?.classList.remove('hidden');
        document.getElementById('dropzone-scan-view')?.classList.add('hidden');
      }
    };

    document.getElementById('quick-photo-btn')?.addEventListener('click', openPhotoScanner);
    document.getElementById('sheet-photo-scan-btn')?.addEventListener('click', () => {
      closeCreateModal();
      openPhotoScanner();
    });
    document.getElementById('close-photo-modal')?.addEventListener('click', () => photoModal?.classList.add('hidden'));

    const triggerScanSimulation = (demoText) => {
      document.getElementById('dropzone-empty-view')?.classList.add('hidden');
      document.getElementById('dropzone-scan-view')?.classList.remove('hidden');
      setTimeout(() => {
        photoModal?.classList.add('hidden');
        const tasks = AppState.parseNaturalText(demoText);
        AppState.openAiDraftModal(tasks);
      }, 1100);
    };

    document.getElementById('select-file-btn')?.addEventListener('click', () => {
      document.getElementById('photo-file-input')?.click();
    });
    document.getElementById('photo-file-input')?.addEventListener('change', () => {
      triggerScanSimulation('Экзамен по экономике в пятницу 10:00, отчет по практике, утренняя пробежка 30 мин');
    });
    document.getElementById('sample-photo-exam')?.addEventListener('click', () => {
      triggerScanSimulation('Экзамен по макроэкономике 10:00 2 часа, повторить конспекты 1 час, прогулка в парке');
    });
    document.getElementById('sample-photo-work')?.addEventListener('click', () => {
      triggerScanSimulation('Завершить презентацию проекта, отправить клиенту, йога и растяжка вечером');
    });

    // Calendar Actions
    document.getElementById('confirm-plan-btn')?.addEventListener('click', () => {
      AppState.planStatus = 'confirmed';
      AppState.save();
      AppState.renderCalendarView();
      AppState.showStatusToast(I18N[AppState.user.locale].plan_confirmed);
    });

    document.getElementById('replan-day-btn')?.addEventListener('click', () => {
      AppState.planStatus = 'draft';
      AppState.save();
      AppState.renderCalendarView();
      AppState.showStatusToast(AppState.user.locale === 'en' ? 'Schedule refreshed' : 'Расписание мягко обновлено');
    });

    // Add Busy Interval Modal
    const eventModal = document.getElementById('add-event-modal-overlay');
    document.getElementById('add-busy-event-btn')?.addEventListener('click', () => eventModal?.classList.remove('hidden'));
    document.getElementById('close-event-modal')?.addEventListener('click', () => eventModal?.classList.add('hidden'));
    document.getElementById('cancel-event-btn')?.addEventListener('click', () => eventModal?.classList.add('hidden'));
    document.getElementById('save-event-btn')?.addEventListener('click', () => {
      const title = document.getElementById('event-title-input').value.trim();
      const start = document.getElementById('event-start-time').value;
      const end = document.getElementById('event-end-time').value;
      if (!title) return;

      AppState.events.push({ id: 'evt-' + Date.now(), title, start_time: start, end_time: end });
      AppState.save();
      AppState.renderCalendarView();
      eventModal?.classList.add('hidden');
      document.getElementById('event-title-input').value = '';
    });

    document.getElementById('cal-view-day-btn')?.addEventListener('click', (e) => {
      AppState.calendarView = 'day';
      e.target.classList.add('active');
      document.getElementById('cal-view-week-btn')?.classList.remove('active');
      AppState.renderCalendarView();
    });

    document.getElementById('cal-view-week-btn')?.addEventListener('click', (e) => {
      AppState.calendarView = 'week';
      e.target.classList.add('active');
      document.getElementById('cal-view-day-btn')?.classList.remove('active');
      AppState.renderCalendarView();
    });

    // Matrix Mobile Tabs (Audit Fix #4)
    document.querySelectorAll('#matrix-mobile-tabs .m-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#matrix-mobile-tabs .m-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        AppState.matrixFilter = tab.dataset.qFilter;
        AppState.renderMatrixView();
      });
    });

    // Drag and Drop in Matrix
    let draggedTaskId = null;
    document.addEventListener('dragstart', (e) => {
      const item = e.target.closest('.matrix-task-item');
      if (item) {
        draggedTaskId = item.dataset.taskId;
        item.classList.add('dragging');
        e.dataTransfer.setData('text/plain', draggedTaskId);
      }
    });

    document.addEventListener('dragend', (e) => {
      const item = e.target.closest('.matrix-task-item');
      if (item) item.classList.remove('dragging');
      document.querySelectorAll('.quadrant-dropzone').forEach(dz => dz.classList.remove('drag-over'));
    });

    document.querySelectorAll('.quadrant-dropzone').forEach(dropzone => {
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('drag-over');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-over');
        const targetQuadrant = parseInt(dropzone.dataset.quadrant, 10);
        if (draggedTaskId && targetQuadrant) {
          AppState.updateTask(draggedTaskId, { quadrant: targetQuadrant });
          AppState.showStatusToast(
            AppState.user.locale === 'en'
              ? `Moved to Quadrant ${targetQuadrant}`
              : `Перемещено в квадрант ${targetQuadrant}`
          );
        }
      });
    });

    // Theme & Language
    document.querySelectorAll('#theme-selector .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => AppState.applyTheme(btn.dataset.themeVal));
    });

    document.querySelectorAll('#lang-selector .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => AppState.setLocale(btn.dataset.langVal));
    });

    document.getElementById('export-data-btn')?.addEventListener('click', () => AppState.exportDataJSON());

    document.getElementById('reset-samples-btn')?.addEventListener('click', () => {
      AppState.resetToSeed();
      AppState.render();
      AppState.showStatusToast(AppState.user.locale === 'en' ? 'Demo data restored' : 'Демо-данные восстановлены');
    });

    document.getElementById('delete-account-btn')?.addEventListener('click', () => {
      localStorage.clear();
      AppState.tasks = [];
      AppState.events = [];
      AppState.render();
      AppState.showStatusToast(AppState.user.locale === 'en' ? 'All data cleared' : 'Все данные очищены');
      setTimeout(() => location.reload(), 800);
    });

    // Profile Edit Modal (Audit Fix #6: Replaces window.prompt)
    const profileModal = document.getElementById('profile-edit-modal-overlay');
    document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
      if (profileModal) {
        document.getElementById('edit-profile-name-input').value = AppState.user.name;
        document.getElementById('edit-profile-email-input').value = AppState.user.email;
        profileModal.classList.remove('hidden');
      }
    });

    document.getElementById('close-profile-modal')?.addEventListener('click', () => profileModal?.classList.add('hidden'));
    document.getElementById('cancel-profile-modal-btn')?.addEventListener('click', () => profileModal?.classList.add('hidden'));
    document.getElementById('save-profile-modal-btn')?.addEventListener('click', () => {
      const name = document.getElementById('edit-profile-name-input').value.trim();
      const email = document.getElementById('edit-profile-email-input').value.trim();
      if (name) AppState.user.name = name;
      if (email) AppState.user.email = email;
      AppState.save();
      AppState.renderProfileView();
      profileModal?.classList.add('hidden');
      AppState.showStatusToast('Профиль обновлён');
    });

    // Google Calendar Sync Mock
    const gcalBtn = document.getElementById('gcal-toggle-btn');
    const gcalStatus = document.getElementById('gcal-status-text');
    if (gcalBtn) {
      gcalBtn.addEventListener('click', () => {
        AppState.user.gcalConnected = !AppState.user.gcalConnected;
        AppState.save();
        if (gcalStatus) {
          gcalStatus.textContent = AppState.user.gcalConnected
            ? I18N[AppState.user.locale].connected
            : I18N[AppState.user.locale].connect;
        }
        AppState.showStatusToast(
          AppState.user.gcalConnected
            ? (AppState.user.locale === 'en' ? 'Calendar synced' : 'Календарь подключен')
            : (AppState.user.locale === 'en' ? 'Calendar disconnected' : 'Календарь отключен')
        );
      });
    }

    // Onboarding Wizard
    const showWizardStep = (stepNum) => {
      document.querySelectorAll('.wizard-step-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`wizard-step-${stepNum}`)?.classList.add('active');
      document.querySelectorAll('.wizard-dot').forEach(dot => {
        dot.classList.toggle('active', parseInt(dot.dataset.step, 10) === stepNum);
      });
      const label = document.getElementById('wizard-step-label');
      if (label) {
        label.textContent = AppState.user.locale === 'en' ? `Step ${stepNum} of 3` : `Шаг ${stepNum} из 3`;
      }
    };

    document.getElementById('mock-google-login-btn')?.addEventListener('click', () => showWizardStep(2));
    document.getElementById('mock-email-login-btn')?.addEventListener('click', () => showWizardStep(2));
    document.getElementById('wizard-to-step-3')?.addEventListener('click', () => showWizardStep(3));

    document.querySelectorAll('#onboarding-lang-control .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => AppState.setLocale(btn.dataset.langVal));
    });

    document.querySelectorAll('#onboarding-theme-control .segment-btn').forEach(btn => {
      btn.addEventListener('click', () => AppState.applyTheme(btn.dataset.themeVal));
    });

    document.getElementById('onboarding-use-sample')?.addEventListener('click', () => {
      const input = document.getElementById('onboarding-first-task-text');
      if (input) {
        input.value = 'Завтра в 10:00 пара по макроэкономике 2 часа, купить продукты, спортзал вечером';
      }
    });

    document.getElementById('wizard-create-first-plan')?.addEventListener('click', () => {
      const input = document.getElementById('onboarding-first-task-text');
      const text = input ? input.value.trim() : '';
      AppState.closeOnboarding();

      if (text) {
        const extracted = AppState.parseNaturalText(text);
        AppState.openAiDraftModal(extracted);
      } else {
        switchTab('today');
      }
    });

    document.getElementById('skip-onboarding-btn')?.addEventListener('click', () => {
      AppState.closeOnboarding();
    });
  });

})();
