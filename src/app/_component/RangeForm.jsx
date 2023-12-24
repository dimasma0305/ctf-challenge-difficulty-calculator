"use client"
import RangeInput from "./RangeInput"

const RangeForm = ({ setRangeValues }) => {
    const handleRangeChange = (name, value) => {
        setRangeValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const rangeInputs = [
        {
            name: 'Multifaceted Skills Needed',
            description: (
                <>
                    <h1 className='font-bold text-lg mb-4'>Multifaceted Skills Needed</h1>
                    <ul className='list-decimal list-inside flex flex-col gap-1'>
                        <li><strong>Baby:</strong> Designed for beginners, focusing on fundamental concepts in a single domain.</li>
                        <li><strong>Easy:</strong> Requires a basic understanding of a specific skill set.</li>
                        <li><strong>Medium:</strong> Involves challenges that primarily focus on a single skill set but may touch on others.</li>
                        <li><strong>Hard:</strong> Demands proficiency in one or two specialized areas or a high level of skill in a broader domain.</li>
                        <li><strong>Insane:</strong> Requires a broad range of skills from various domains, demanding expertise in multiple areas (e.g., reverse engineering, cryptography, binary exploitation, web exploitation).</li>
                    </ul>
                </>
            ),
        },
        {
            name: 'Complex Code/Payload/Bypass',
            description: (
                <>
                    <h1 className='font-bold text-lg mb-4'>Complex Code/Payload/Bypass</h1>
                    <ul className='list-decimal list-inside flex flex-col gap-1'>
                        <li><strong>Baby:</strong> Code or payload is simple and easily understandable.</li>
                        <li><strong>Easy:</strong> Code or payload is relatively straightforward, with minimal obfuscation.</li>
                        <li><strong>Medium:</strong> Involves code or payload complexities that may require intermediate-level analysis skills.</li>
                        <li><strong>Hard:</strong> Utilizes complex code or obfuscation techniques, demanding a careful analysis of the code or payload.</li>
                        <li><strong>Insane:</strong> Involves highly complex, obfuscated, or unconventional code/payload/bypass mechanisms, requiring advanced analysis and understanding.</li>
                    </ul>
                </>
            ),
        },
        {
            name: 'Multiple Steps of Complexity',
            description: (
                <>
                    <h1 className='font-bold text-lg mb-4'>Multiple Steps of Complexity</h1>
                    <ul className='list-decimal list-inside flex flex-col gap-1'>
                        <li><strong>Baby:</strong> Requires only a single step for completion.</li>
                        <li><strong>Easy:</strong> Involves a few simple steps with a straightforward progression.</li>
                        <li><strong>Medium:</strong> Requires several steps to complete, with a moderate level of complexity in the process.</li>
                        <li><strong>Hard:</strong> Involves multiple steps, each demanding careful consideration and execution.</li>
                        <li><strong>Insane:</strong> Requires a series of highly intricate and interdependent steps for successful completion.</li>
                    </ul>
                </>
            ),
        },
        {
            name: 'Dynamic Elements and Updates',
            description: (
                <>
                    <h1 className='font-bold text-lg mb-4'>Dynamic Elements and Updates</h1>
                    <ul className='list-decimal list-inside flex flex-col gap-1'>
                        <li><strong>Baby:</strong> Completely static challenge, requiring no adaptation.</li>
                        <li><strong>Easy:</strong> Challenges remain static throughout, with no dynamic elements or updates.</li>
                        <li><strong>Medium:</strong> Introduces some dynamic elements or updates, influencing the challenge's progression.</li>
                        <li><strong>Hard:</strong> Includes dynamic elements that may change during the challenge but are less frequent or predictable.</li>
                        <li><strong>Insane:</strong> Involves dynamic elements that change over time, requiring participants to adapt and update their approach.</li>
                    </ul>
                </>
            ),
        },
        {
            name: 'Hidden Attack Vectors or Non-Traditional Attack Vectors',
            description: (
                <>
                    <h1 className='font-bold text-lg mb-4'>Hidden Attack Vectors or Non-Traditional Attack Vectors</h1>
                    <ul className='list-decimal list-inside flex flex-col gap-1'>
                        <li><strong>Baby:</strong> Relies on widely recognized and easily identifiable attack vectors.</li>
                        <li><strong>Easy:</strong> Attack vectors are straightforward and well-known.</li>
                        <li><strong>Medium:</strong> Challenges participants with attack vectors that may not be immediately obvious but fall within standard practices.</li>
                        <li><strong>Hard:</strong> Includes attack vectors that are less apparent or follow less common paths.</li>
                        <li><strong>Insane:</strong> Incorporates hidden or non-traditional attack vectors, challenging participants to think beyond conventional methods.</li>
                    </ul>
                </>
            ),
        },
    ];
    return (<>
        {
            rangeInputs.map((input, index) => (
                <RangeInput
                    key={index}
                    label={input.name}
                    name={input.name}
                    description={input.description}
                    onRangeChange={handleRangeChange}
                />
            ))
        }
    </>
    )
}

export default RangeForm
