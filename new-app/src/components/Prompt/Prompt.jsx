import React from "react";

import s from './PromptCard.module.css'

const PromptCard = () => {
  return (
    <div className={s.promptCard}>

      <div className={s.content}>
        <p>Создайте универсальный разговорник, чтобы легко общаться на иностранном языке.</p>
      </div>

      <button className={s.actionButton}>Редактировать</button>
    </div>
  );
};

export default PromptCard;