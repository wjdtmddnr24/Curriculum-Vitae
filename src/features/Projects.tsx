export function Projects() {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-200 rounded shadow-2xl w-[88rem] min-h-[35rem] mx-auto p-10">
      <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 font-bold mb-8">
        Projects
      </div>
      <div className="grid grid-cols-4 gap-8 text-lg">
        <div>Webox - 퍼스널 모빌리티를 위한 클라우드 기반 블랙박스 어플리케이션</div>
        <div>Captain Hook - Webhook 기반 알림 서비스</div>
        <div>Captain Hook - Webhook 기반 알림 서비스</div>
      </div>
    </div>
  );
}
