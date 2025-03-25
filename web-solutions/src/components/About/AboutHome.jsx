import { Team } from "../Team";
import { AboutHead } from "./AboutHead";
import { Video } from "./Video";
import {Values} from './AboutValues'

export function AboutHome(){
    return (
        <>
           <div className="w-11/12 mx-auto">
                <AboutHead/>
                <Video/>
                <Values/>
                <Team/>
           </div>
            
        </>
    )
}