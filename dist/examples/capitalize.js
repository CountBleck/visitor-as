import { decorates } from "../utils.js";
import { VariableDecorator, registerDecorator } from "../decorator.js";
class CapitalizeVisitor extends VariableDecorator {
    visitVariableDeclaration(node) {
        this.visit(node.initializer);
    }
    get decoratorMatcher() {
        return (node) => decorates(node, "capitalize");
    }
    afterParse(parser) {
        // console.log(parser.)
    }
    visitStringLiteralExpression(node) {
        const oldValue = node.value;
        node.value = node.value.toUpperCase();
        this.stdout.write(oldValue + " -> " + node.value + "\n");
    }
    visitTemplateLiteralExpression(node) {
        if (node.parts.length == 1 && node.expressions.length == 0) {
            const oldValue = node.parts[0];
            node.parts[0] = node.parts[0].toUpperCase();
            this.stdout.write(oldValue + " -> " + node.parts[0] + "\n");
        }
    }
}
export default registerDecorator(new CapitalizeVisitor());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9jYXBpdGFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHdkUsTUFBTSxpQkFBa0IsU0FBUSxpQkFBaUI7SUFDL0Msd0JBQXdCLENBQUMsSUFBeUI7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLHVCQUF1QjtJQUN6QixDQUFDO0lBRUQsNEJBQTRCLENBQUMsSUFBNkI7UUFDeEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw4QkFBOEIsQ0FBQyxJQUErQjtRQUM1RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDekQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztDQUNGO0FBRUQsZUFBZSxpQkFBaUIsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb25lTm9kZSwgZGVjb3JhdGVzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XHJcbmltcG9ydCB7IFZhcmlhYmxlRGVjb3JhdG9yLCByZWdpc3RlckRlY29yYXRvciB9IGZyb20gXCIuLi9kZWNvcmF0b3IuanNcIjtcclxuaW1wb3J0IHsgRGVjb3JhdG9yTm9kZSwgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sIFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24sIFZhcmlhYmxlRGVjbGFyYXRpb24sIE1vZHVsZSwgUGFyc2VyIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0L2Rpc3QvYXNzZW1ibHlzY3JpcHQuanNcIjtcclxuXHJcbmNsYXNzIENhcGl0YWxpemVWaXNpdG9yIGV4dGVuZHMgVmFyaWFibGVEZWNvcmF0b3Ige1xyXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlY29yYXRvck1hdGNoZXIoKTogKG5vZGU6IERlY29yYXRvck5vZGUpID0+IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChub2RlKSA9PiBkZWNvcmF0ZXMobm9kZSwgXCJjYXBpdGFsaXplXCIpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJQYXJzZShwYXJzZXI6IFBhcnNlcikge1xyXG4gICAgLy8gY29uc29sZS5sb2cocGFyc2VyLilcclxuICB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gbm9kZS52YWx1ZTsgXHJcbiAgICBub2RlLnZhbHVlID0gbm9kZS52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy5zdGRvdXQud3JpdGUob2xkVmFsdWUgKyBcIiAtPiBcIiArIG5vZGUudmFsdWUgKyBcIlxcblwiKTtcclxuICB9XHJcbiAgXHJcbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIGlmIChub2RlLnBhcnRzLmxlbmd0aCA9PSAxICYmIG5vZGUuZXhwcmVzc2lvbnMubGVuZ3RoID09IDApe1xyXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IG5vZGUucGFydHNbMF07XHJcbiAgICAgIG5vZGUucGFydHNbMF0gPSBub2RlLnBhcnRzWzBdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuc3Rkb3V0LndyaXRlKG9sZFZhbHVlICsgXCIgLT4gXCIgKyBub2RlLnBhcnRzWzBdICsgXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckRlY29yYXRvcihuZXcgQ2FwaXRhbGl6ZVZpc2l0b3IoKSk7XHJcbiJdfQ==