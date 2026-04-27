import * as React from "react";

export interface IAIRecommendationPanelProps {
 aiStatus?: string;
 aiRecommendationScore?: string;
 aiSummary?: string;
 aiCategory?: string;
 aiPriority?: string;
 aiNextStep?: string;
 aiFlowSuggestion?: string;
 requestType?: string;
}

const getFlowNodes = (requestType?: string): string[] => {

switch(requestType){

case "Approval Workflow":
return [
"Trigger",
"Manager Approval",
"Conditional Outcome",
"Update Status"
];

case "Notification":
return [
"Schedule",
"Generate Reminder",
"Send Teams Message",
"Log Activity"
];

case "Reporting":
return [
"Schedule",
"Get Data",
"Build Summary",
"Send Report"
];

default:
return [
"Discovery",
"Map Process",
"Solution Design"
];

}

};

const getPriorityColor = (priority?: string) => {

switch(priority){

case "High":
return "#d13438";

case "Medium":
return "#ffb900";

case "Low":
return "#107c10";

default:
return "#605e5c";

}

};

export const AIRecommendationPanel = (
props: IAIRecommendationPanelProps
): React.ReactElement => {

const flowNodes = getFlowNodes(props.requestType);

return (

<div style={{
padding:"20px",
maxWidth:"700px",
fontFamily:"Segoe UI, Arial",
background:"#ffffff"
}}>

{/* Header */}

<div style={{
border:"1px solid #e5e7eb",
borderRadius:"12px",
padding:"18px",
boxShadow:"0 2px 6px rgba(0,0,0,.08)"
}}>

<h2 style={{
marginTop:0,
marginBottom:"14px"
}}>
AI Copilot Recommendation
</h2>

{/* badges */}

<div style={{
display:"flex",
gap:"10px",
marginBottom:"18px",
flexWrap:"wrap"
}}>

<div style={{
background:"#eef6fc",
padding:"8px 12px",
borderRadius:"18px"
}}>
Status: {props.aiStatus || "Not Analyzed"}
</div>

<div style={{
background:"#f3f2f1",
padding:"8px 12px",
borderRadius:"18px"
}}>
Score: {props.aiRecommendationScore || "Needs Review"}
</div>

<div style={{
background:getPriorityColor(props.aiPriority),
color:"#fff",
padding:"8px 12px",
borderRadius:"18px"
}}>
Priority: {props.aiPriority || "-"}
</div>

</div>

{/* sections */}

<Section
title="Summary"
value={props.aiSummary}
/>

<Section
title="Suggested Category"
value={props.aiCategory}
/>

<Section
title="Recommended Next Step"
value={props.aiNextStep}
/>

<Section
title="Flow Suggestion"
value={props.aiFlowSuggestion}
/>

{/* flow diagram */}

<h3 style={{marginTop:"24px"}}>
Suggested Flow Diagram
</h3>

{flowNodes.map((node,index)=>(

<div key={index}>

<div style={{
padding:"12px",
margin:"10px 0",
border:"1px solid #d1d5db",
borderLeft:"5px solid #0078d4",
borderRadius:"8px",
background:"#fafafa",
fontWeight:600,
textAlign:"center"
}}>
{node}
</div>

{index < flowNodes.length-1 && (
<div style={{
textAlign:"center",
fontSize:"18px",
marginBottom:"4px"
}}>
↓
</div>
)}

</div>

))}

{/* button */}

<button
onClick={()=>{
 alert(
"Future step: trigger Power Automate flow to generate AI recommendations."
 );
}}
style={{
marginTop:"20px",
width:"100%",
padding:"12px",
background:"#0078d4",
color:"white",
border:"none",
borderRadius:"8px",
fontWeight:600,
cursor:"pointer"
}}
>
Analyze with Power Automate
</button>

</div>

</div>

);

};

interface SectionProps{
title:string;
value?:string;
}

const Section = ({title,value}:SectionProps) => (

<div style={{marginBottom:"18px"}}>

<div style={{
fontWeight:600,
marginBottom:"6px"
}}>
{title}
</div>

<div style={{
background:"#f8fafc",
padding:"12px",
borderRadius:"8px",
border:"1px solid #e5e7eb"
}}>
{value || "-"}
</div>

</div>

);