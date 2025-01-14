import { LiteralKind, } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
import { getDecorator, hasDecorator, isLibrary, isUserEntry } from "../utils.js";
function getName(element) {
    let decorator = getDecorator(element.declaration, "exportAs");
    if (decorator.args == null) {
        throw Error("exportAs expects a string argument but got null.");
    }
    if (decorator.args.length != 1) {
        throw Error(`exportAs expects 1 argument but got ${decorator.args.length}`);
    }
    if (!decorator.args[0].isLiteralKind(LiteralKind.STRING)) {
        throw Error("exportAs expects a string argument");
    }
    return decorator.args[0].value;
}
class Transformer extends Transform {
    afterInitialize(program) {
        let files = Array.from(program.filesByName.values()).filter((file) => isUserEntry(file.source) && !isLibrary(file.source));
        for (let file of files) {
            for (let _export of file.exports?.values() || []) {
                if (_export != null && hasDecorator(_export, "exportAs")) {
                    let newName = getName(_export);
                    file.exports?.delete(_export.name);
                    file.exports?.set(newName, _export);
                }
            }
        }
    }
}
export default Transformer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0QXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvZXhwb3J0QXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFdBQVcsR0FJWixNQUFNLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpGLFNBQVMsT0FBTyxDQUFDLE9BQXdCO0lBQ3ZDLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDMUIsTUFBTSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztLQUNqRTtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQzlCLE1BQU0sS0FBSyxDQUFDLHVDQUF1QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDN0U7SUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3hELE1BQU0sS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7S0FDbkQ7SUFDRCxPQUFpQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxDQUFDLEtBQUssQ0FBQztBQUM1RCxDQUFDO0FBRUQsTUFBTSxXQUFZLFNBQVEsU0FBUztJQUNqQyxlQUFlLENBQUMsT0FBZ0I7UUFDOUIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUN6RCxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQzlELENBQUM7UUFDRixLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN0QixLQUFLLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNoRCxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRTtvQkFDeEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDckM7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBRUQsZUFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIExpdGVyYWxLaW5kLFxyXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxyXG4gIFByb2dyYW0sXHJcbiAgRGVjbGFyZWRFbGVtZW50LFxyXG59IGZyb20gXCJhc3NlbWJseXNjcmlwdC9kaXN0L2Fzc2VtYmx5c2NyaXB0LmpzXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJhc3NlbWJseXNjcmlwdC9kaXN0L3RyYW5zZm9ybS5qc1wiO1xyXG5pbXBvcnQgeyBnZXREZWNvcmF0b3IsIGhhc0RlY29yYXRvciwgaXNMaWJyYXJ5LCBpc1VzZXJFbnRyeSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0TmFtZShlbGVtZW50OiBEZWNsYXJlZEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gIGxldCBkZWNvcmF0b3IgPSBnZXREZWNvcmF0b3IoZWxlbWVudC5kZWNsYXJhdGlvbiwgXCJleHBvcnRBc1wiKTtcclxuICBpZiAoZGVjb3JhdG9yLmFyZ3MgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgRXJyb3IoXCJleHBvcnRBcyBleHBlY3RzIGEgc3RyaW5nIGFyZ3VtZW50IGJ1dCBnb3QgbnVsbC5cIik7XHJcbiAgfVxyXG4gIGlmIChkZWNvcmF0b3IuYXJncy5sZW5ndGggIT0gMSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYGV4cG9ydEFzIGV4cGVjdHMgMSBhcmd1bWVudCBidXQgZ290ICR7ZGVjb3JhdG9yLmFyZ3MubGVuZ3RofWApO1xyXG4gIH1cclxuICBpZiAoIWRlY29yYXRvci5hcmdzWzBdLmlzTGl0ZXJhbEtpbmQoTGl0ZXJhbEtpbmQuU1RSSU5HKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoXCJleHBvcnRBcyBleHBlY3RzIGEgc3RyaW5nIGFyZ3VtZW50XCIpO1xyXG4gIH1cclxuICByZXR1cm4gKDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5kZWNvcmF0b3IuYXJnc1swXSkudmFsdWU7XHJcbn1cclxuXHJcbmNsYXNzIFRyYW5zZm9ybWVyIGV4dGVuZHMgVHJhbnNmb3JtIHtcclxuICBhZnRlckluaXRpYWxpemUocHJvZ3JhbTogUHJvZ3JhbSk6IHZvaWQge1xyXG4gICAgbGV0IGZpbGVzID0gQXJyYXkuZnJvbShwcm9ncmFtLmZpbGVzQnlOYW1lLnZhbHVlcygpKS5maWx0ZXIoXHJcbiAgICAgIChmaWxlKSA9PiBpc1VzZXJFbnRyeShmaWxlLnNvdXJjZSkgJiYgIWlzTGlicmFyeShmaWxlLnNvdXJjZSlcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGZvciAobGV0IF9leHBvcnQgb2YgZmlsZS5leHBvcnRzPy52YWx1ZXMoKSB8fCBbXSkge1xyXG4gICAgICAgIGlmIChfZXhwb3J0ICE9IG51bGwgJiYgaGFzRGVjb3JhdG9yKF9leHBvcnQsIFwiZXhwb3J0QXNcIikpIHtcclxuICAgICAgICAgIGxldCBuZXdOYW1lID0gZ2V0TmFtZShfZXhwb3J0KTtcclxuICAgICAgICAgIGZpbGUuZXhwb3J0cz8uZGVsZXRlKF9leHBvcnQubmFtZSk7XHJcbiAgICAgICAgICBmaWxlLmV4cG9ydHM/LnNldChuZXdOYW1lLCBfZXhwb3J0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybWVyO1xyXG4iXX0=