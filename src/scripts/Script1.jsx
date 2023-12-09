import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {getGenitiveCase} from "../Functions/GetGenetiveCase"

const Script1 = ({parentName, yourName, subject, childName, childGender, updateResult}) => {

    useEffect(() => {
        textPush()
    }, [parentName, yourName, subject, childName, childGender]);

    function textPush(){
        updateResult("Добрый день,  " + parentName + "!\n" +
            "На связи " + yourName + " , я преподаватель " + subject + " школы RTS.\n" +
            "Хочу поделиться с вами результатами модуля и успехами " +getGenitiveCase(childName) + " на уроках.\n" +
            "\n" +
            "На текущем модуле обучения мы разобрали темы:______\n" +
            "Нашим проектом было _______________.\n" +
            "Ниже я прикреплю скриншоты проекта.\n" +
            "\n" +
            "У " + getGenitiveCase(childName) + " отличные способности к программированию на " + subject + ".\n" +
            "Особенно хорошо у " + gender() + " получается ____________.\n" +
            "На следующем модуле мы будем создавать (проект след. модуля).\n" +
            "\n" +
            "Есть ли у вас какие-то вопросы или комментарии по нашим занятиям?")


    }

    function gender(){
        return childGender === "Мальчик" ? "него" : "неё"
    }

    return (
        <div>
            Добрый день, <span className="variablesColor">{parentName}</span>!
            <br/>На связи <span className="variablesColor">{yourName}</span> , я преподаватель <span className="variablesColor">{subject}</span> школы RTS.

            <br/><br/>Хочу поделиться с вами результатами модуля и успехами <span className="variablesColor">{getGenitiveCase(childName)}</span> на уроках.

            <br/><br/>На текущем модуле обучения мы разобрали темы:______
            <br/>Нашим проектом было _______________.
            <br/>Ниже я прикреплю скриншоты проекта.

            <br/><br/>У <span className="variablesColor">{getGenitiveCase(childName)}</span> отличные способности к программированию на <span className="variablesColor">{subject}</span>.
            <br/>Особенно хорошо у <span className="variablesColor">{childGender === "Мальчик" ? "него" : "неё"}</span> получается ____________.
            <br/>На следующем модуле мы будем создавать (проект след. модуля).

            <br/><br/>Есть ли у вас какие-то вопросы или комментарии по нашим занятиям?


        </div>
    );
};

export default Script1;