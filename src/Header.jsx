import { EditableInput } from "./EditableInput.jsx"
import { Photo } from "./Photo.jsx"
import Icon from '@mdi/react';
import { mdiLinkBoxOutline, mdiMapMarkerOutline, mdiAt, mdiPhoneOutline } from '@mdi/js';

function Header({ iconVisibility = true }) {

    return <div className={"header" + (iconVisibility ? "" : " noicon")}>
        {iconVisibility && <Photo className="photo" />}
        <EditableInput type="text" value="Kate Schumacher" className="header-item name" />
        <EditableInput multiline={true} value="Motivated and detail-oriented developer with a strong foundation in full-stack web development, gained through completing The Odin Project. Skilled in JavaScript, HTML, CSS, and React, with hands-on experience building responsive, user-focused applications. Brings extensive Japanese language proficiency (JLPT N2) and cross-cultural communication skills, with experience studying and working in Japanese-speaking environments." className="header-item summary" />
        <div className="website">
            <Icon path={mdiLinkBoxOutline} size={1} />
            <EditableInput type="text" value="https://github.com/katekat25" className="header-item" />
        </div>
        <div className="email">
            <Icon path={mdiAt} size={1} />
            <EditableInput type="email" value="kate.schumacher@gmail.com" className="header-item" />
        </div>
        <div className="number">
            <Icon path={mdiPhoneOutline} size={1} />
            <EditableInput type="tel" value="(555) 555-5555" className="header-item" />
        </div>
        <div className="address">
            <Icon path={mdiMapMarkerOutline} size={1} />
            <EditableInput type="text" value="123 Pleasant St., Anytown, USA" className="header-item" />
        </div>
    </div>
}

export { Header }