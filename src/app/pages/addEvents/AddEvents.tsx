import React, { useState } from 'react';
import customAddEventsStyle from './style.scss';

function AddEvents(props) {

    const [eventsTitle, setEventsTitle] = useState("Etkinlik Başlığı");
    const [eventsContent, setEventsContent] = useState("Etkinlik İçeriği");
    const [eventsCategory, setEventsCategory] = useState("1");

    function addEvents(){
        // TODO: ADD EVENTS ACTION
    }
    return (
        <>
            <div className={customAddEventsStyle.container}>
                <div className={customAddEventsStyle.form}>
                    <h3>Etkinlik Ekle</h3>
                    <div className={customAddEventsStyle.field}>
                        <p>Etkinlik Başlığı</p>
                        <textarea  onChange={(e) => setEventsTitle(e.target.value)}
                         className={customAddEventsStyle.eventsTitle} cols={40} rows={3} ></textarea>
                    </div>
                    <div className={customAddEventsStyle.field}>
                        <p>Etkinlik İçeriği</p>
                        <textarea onChange={(e) => setEventsContent(e.target.value)}
                         className={customAddEventsStyle.eventsContent} cols={40} rows={10} ></textarea>
                    </div>
                    <div className={customAddEventsStyle.field}>
                        <p>Etkinlik Kategorisi Etiketleri</p>
                        <select type="combobox" onChange={(e) => setEventsCategory(e.target.value)}
                         className={customAddEventsStyle.category}>
                         <option value="0">Meetup </option>
                         <option value="1">Software</option>
                         </select>
                    </div>
                </div>
                <div className={customAddEventsStyle.button}>
                <button onClick={addEvents}> Ekle</button>
                </div>
            </div>
            <div>
                    {"'" + eventsTitle + "','" + eventsContent + "','" + eventsCategory + "'"}
                </div>	            
        </>
    );
};


export {
    AddEvents as default,
};
