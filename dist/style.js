export const style = (strings, ...values) => {
    const stylesheet = new CSSStyleSheet;
    stylesheet.replaceSync(values.reduce((css, value, index) => css + value + strings[index + 1], strings[0]));
    return stylesheet;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBaUIsRUFBRSxHQUFHLE1BQWdCLEVBQUUsRUFBRTtJQUU1RCxNQUFNLFVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBQztJQUVyQyxVQUFVLENBQUMsV0FBVyxDQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckYsQ0FBQztJQUVGLE9BQU8sVUFBVSxDQUFDO0FBRXRCLENBQUMsQ0FBQyJ9