module.exports = (plop) => {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile: "templates/Component/Component.js.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
                templateFile: "templates/Component/ComponentStory.js.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/index.ts",
                templateFile: "templates/Component/index.js.hbs",
            },
        ],
    });
};
