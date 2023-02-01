import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Tech News</h2>
                <Info />
            </div>
            {newsArticle("Information security analyst", "These analysts will plan and execute security measures")}
            {newsArticle("Statistician", "Statisticians usually love math and analyzing data")}
            {newsArticle("Economist", "An economist will research, write reports, and problem-solve")}
            {newsArticle("Solar photovoltaic installers", "working outdoors on rooftops but also in attics")}
            {newsArticle("Data scientist", "A data scientist may work for organizations in various industries")}
            {newsArticle("Film and video editors", "Videos are everywhere, and someone needs to edit them.")}
        </div>
    )
}

export default Widgets