// Main Container
export const Main_style = `
flex 
flex-col 
p-2 
border-r-[1px] 
border-gray-300 
h-screen w-[250px]
`;

// The Control panel menu 
export const ControlPanel_style = {
    container: `
flex
flex-row
items-center
justify-between
border-[1px]
border-gray-300
rounded-md
py-1
px-2
text-[14px]
outline-none
font-medium
shadow-sm
mb-1
    `,
    dropdownMenuLabel: `
text-gray-600
    `,
    links: `
flex 
flex-row 
items-center 
gap-2
m-0 
capitalize
w-full,
h-full
    `,
    logout: `
text-red-500 
mb-1
    `
};

export const Profile_style = {
    section: `
flex 
flex-row 
items-center 
gap-2
`,
    avatar: `
rounded-full 
w-[30px]
`,
    username: `
capitalize 
text-md
`
};

export const ToggleIcon_style = `
text-gray-500
`;

// The Paths section
export const Paths_style = {
    container: `
text-[14px]
    `,
    links: `
flex
flex-row 
items-center 
gap-2 
capitalize 
w-full 
mb-[6px]
p-2 
rounded-md
hover:bg-[#F0F0F0]
hover:shadow-sm
transition-all 
duration-300 
ease-in-out 
`,
    active: `
bg-[#202020] 
text-white
shadow-sm
font-semibold
hover:bg-black
hover:shadow-md
`
};

export const Dialog_style = {
    DialogTitle: `
    mb-2
    `,
    InputSection: `
    flex 
    w-full 
    items-center 
    space-x-2
    `,
}

// The Labels section + Scroll Area
export const ScrollArea_style = `
max-h-[330px] 
w-auto 
rounded-md
`;

export const Labels_style = {
    container: ` 
text-[14px]
    `,
    links: `
flex
flex-row 
items-center 
gap-2 
capitalize 
w-full 
mb-[6px]
p-2 
rounded-md
hover:bg-[#F0F0F0]
transition-all 
duration-300 
ease-in-out 
`,
num: `
bg-[#F0F0F0]
text-black
text-xs
px-1
rounded-sm
`,
active: `
bg-[#202020] 
text-white
shadow-sm
hover:bg-[#203030]
`,

empty: `
flex
flex-col
items-center
text-[14px]
text-gray-500
justify-center
capitalize
w-full
my-10
`
};

// Footer section
export const Footer_style = {
    container: `
flex
flex-col
gap-2
text-[13px]
text-gray-500
capitalize
transition-all 
duration-300 
ease-in-out 
`,
    links: ` 
w-[120px]
capitalized
hover:text-black
`,
    copyright: `
flex 
items-center
gap-1 
text-xs 
mt-2
`,
}

