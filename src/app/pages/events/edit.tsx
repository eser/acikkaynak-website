import React, { useState } from 'react';
import customAddEventsStyle from './add.scss';
import { NavLink } from 'react-router-dom';
import customAddEventsStyle from './add.scss';

function EventsEdit(props){
    const [eventsTitle, setEventsTitle] = useState(props.content.title);
    const [eventsContent, setEventsContent] = useState(props.content.content);
    const [eventsCategory, setEventsCategory] = useState(props.content.category== "Meetup" ? 0 : 1);
    
function goBackButton(event) {
        history.back();
        event.preventDefault();
    }
return (
        <>
        <div className={"container"}>
        <NavLink key="0" to={`/events/`} onClick={goBackButton}>
                Geri Dön
        </NavLink>
            <h5>{props.content.title} Etkinliğini Düzenle</h5>
              <div className={customAddEventsStyle.field}>
                        <p>Etkinlik Başlığı</p>
                        <textarea  value={eventsTitle} onChange={(e) => setEventsTitle(e.target.value)}
                            className={customAddEventsStyle.eventsTitle} cols={40} rows={3} ></textarea>
                    </div>
                    <div className={customAddEventsStyle.field}>
                        <p>Etkinlik İçeriği</p>
                        <textarea  value={eventsContent} onChange={(e) => setEventsContent(e.target.value)}
                            className={customAddEventsStyle.eventsContent} cols={40} rows={10} ></textarea>
                    </div>
                    <div className={customAddEventsStyle.field}>
                        <p>Etkinlik Kategorisi Etiketleri</p>
                        <select value={eventsCategory} type="combobox" onChange={(e) => setEventsCategory(e.target.value)}
                            className={customAddEventsStyle.category}>
                            <option value="0">Meetup </option>
                            <option value="1">Software</option>
                        </select>
                    </div>
                <div className={customAddEventsStyle.button}>
                    <button > Düzenlemeyi kaydet</button>
                </div>
                <div>
                    {"'" + eventsTitle + "','" + eventsContent + "','" + eventsCategory + "'"}
                </div>
        </div>
        </>
    );
}


export {
    EventsEdit as default,
};