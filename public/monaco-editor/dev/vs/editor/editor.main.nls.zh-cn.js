/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.21.1(d09f920162136be19d419ac5e3eb189ae34ea100)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.zh-cn", {
	"vs/base/browser/ui/actionbar/actionViewItems": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"输入",
	],
	"vs/base/browser/ui/findinput/findInputCheckboxes": [
		"区分大小写",
		"全字匹配",
		"使用正则表达式",
	],
	"vs/base/browser/ui/findinput/replaceInput": [
		"输入",
		"保留大小写",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"错误: {0}",
		"警告: {0}",
		"信息: {0}",
	],
	"vs/base/browser/ui/keybindingLabel/keybindingLabel": [
		"未绑定",
	],
	"vs/base/browser/ui/menu/menu": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/tree/abstractTree": [
		"清除",
		"禁用输入时筛选",
		"启用输入时筛选",
		"未找到元素",
		"已匹配 {0} 个元素(共 {1} 个)",
	],
	"vs/base/common/errorMessage": [
		"{0}: {1}",
		"发生了系统错误 ({0})",
		"出现未知错误。有关详细信息，请参阅日志。",
		"出现未知错误。有关详细信息，请参阅日志。",
		"{0} 个(共 {1} 个错误)",
		"出现未知错误。有关详细信息，请参阅日志。",
	],
	"vs/base/common/keybindingLabels": [
		"Ctrl",
		"Shift",
		"Alt",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"超键",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Control",
		"Shift",
		"Alt",
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"超键",
	],
	"vs/base/parts/quickinput/browser/quickInput": [
		"上一步",
		"{0}/{1}",
		"在此输入可缩小结果范围。",
		"{0} 个结果",
		"已选 {0} 项",
		"确定",
		"自定义",
		"后退 ({0})",
		"上一步",
	],
	"vs/base/parts/quickinput/browser/quickInputList": [
		"快速输入",
	],
	"vs/editor/browser/controller/coreCommands": [
		"即使转到较长的行，也一直到末尾",
		"即使转到较长的行，也一直到末尾",
	],
	"vs/editor/browser/controller/textAreaHandler": [
		"编辑器",
		"现在无法访问编辑器。按 {0} 获取选项。",
	],
	"vs/editor/browser/editorExtensions": [
		"撤消(&&U)",
		"撤消",
		"恢复(&&R)",
		"恢复",
		"全选(&&S)",
		"选择全部",
	],
	"vs/editor/browser/widget/codeEditorWidget": [
		"光标数量被限制为 {0}。",
	],
	"vs/editor/browser/widget/diffEditorWidget": [
		"文件过大，无法比较。",
	],
	"vs/editor/browser/widget/diffReview": [
		"关闭",
		"未更改行",
		"更改了 1 行",
		"更改了 {0} 行",
		"差异 {0}/ {1}: 原始行 {2}，{3}，修改后的行 {4}，{5}",
		"空白",
		"{0} 未更改的行 {1}",
		"{0}原始行{1}修改的行{2}",
		"+ {0}修改的行{1}",
		"- {0}原始行{1}",
		"转至下一个差异",
		"转至上一个差异",
	],
	"vs/editor/browser/widget/inlineDiffMargin": [
		"复制已删除的行",
		"复制已删除的行",
		"复制已删除的行({0})",
		"还原此更改",
		"复制已删除的行({0})",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"编辑器",
		"一个制表符等于的空格数。在 `#editor.detectIndentation#` 启用时，根据文件内容，该设置可能会被覆盖。",
		"按 `Tab` 键时插入空格。该设置在 `#editor.detectIndentation#` 启用时根据文件内容可能会被覆盖。",
		"控制是否在打开文件时，基于文件内容自动检测 `#editor.tabSize#` 和 `#editor.insertSpaces#`。",
		"删除自动插入的尾随空白符号。",
		"对大型文件进行特殊处理，禁用某些内存密集型功能。",
		"控制是否根据文档中的文字计算自动完成列表。",
		"对所有颜色主题启用语义突出显示。",
		"对所有颜色主题禁用语义突出显示。",
		"语义突出显示是由当前颜色主题的 \"semanticHighlighting\" 设置配置的。",
		"控制是否为支持它的语言显示语义突出显示。",
		"在速览编辑器中，即使双击其中的内容或者按 `Esc` 键，也保持其打开状态。",
		"由于性能原因，超过这个长度的行将不会被标记",
		"超时(以毫秒为单位)，之后将取消差异计算。使用0表示没有超时。",
		"控制差异编辑器的显示方式是并排还是内联。",
		"启用后，差异编辑器将忽略前导空格或尾随空格中的更改。",
		"控制差异编辑器是否为添加/删除的更改显示 +/- 指示符号。",
		"控制是否在编辑器中显示 CodeLens。",
	],
	"vs/editor/common/config/editorOptions": [
		"编辑器将使用平台 API 以检测是否附加了屏幕阅读器。",
		"编辑器将对屏幕阅读器的使用进行永久优化。",
		"编辑器将不再对屏幕阅读器的使用进行优化。",
		"控制编辑器是否应运行在对屏幕阅读器进行优化的模式。",
		"控制在注释时是否插入空格字符。",
		"控制在对行注释执行切换、添加或删除操作时，是否应忽略空行。",
		"控制在没有选择内容时进行复制是否复制当前行。",
		"控制在键入时光标是否应跳转以查找匹配项。",
		"控制是否将编辑器选中内容作为搜索词填入到查找小组件中。",
		"切勿自动打开“选择中查找”(默认)",
		"始终自动打开“在选择中查找”",
		"选择多行内容时，自动打开“在选择中查找”。",
		"控制在所选内容中自动开启查找的条件。",
		"控制“查找”小组件是否读取或修改 macOS 的共享查找剪贴板。",
		"控制 \"查找小部件\" 是否应在编辑器顶部添加额外的行。如果为 true, 则可以在 \"查找小工具\" 可见时滚动到第一行之外。",
		"控制在找不到其他匹配项时，是否自动从开头(或结尾)重新开始搜索。",
		"启用或禁用字体连字。",
		"显式字体功能设置。",
		"配置字体连字或字体功能。",
		"控制字体大小(像素)。",
		"仅允许使用关键字“正常”和“加粗”，或使用介于 1 至 1000 之间的数字。",
		"控制字体粗细。接受关键字“正常”和“加粗”，或者接受介于 1 至 1000 之间的数字。",
		"显示结果的预览视图 (默认值)",
		"转到主结果并显示预览视图",
		"转到主结果，并对其他人启用防偷窥导航",
		"此设置已弃用，请改用单独的设置，如\"editor.editor.gotoLocation.multipleDefinitions\"或\"editor.editor.gotoLocation.multipleImplementations\"。",
		"控制存在多个目标位置时\"转到定义\"命令的行为。",
		"控制存在多个目标位置时\"转到类型定义\"命令的行为。",
		"控制存在多个目标位置时\"转到声明\"命令的行为。",
		"控制存在多个目标位置时\"转到实现\"命令的行为。",
		"控制存在多个目标位置时\"转到引用\"命令的行为。",
		"当\"转到定义\"的结果为当前位置时将要执行的替代命令的 ID。",
		"当\"转到类型定义\"的结果是当前位置时正在执行的备用命令 ID。",
		"当\"转到声明\"的结果为当前位置时将要执行的替代命令的 ID。",
		"当\"转到实现\"的结果为当前位置时将要执行的替代命令的 ID。",
		"当\"转到引用\"的结果是当前位置时正在执行的替代命令 ID。",
		"控制是否显示悬停提示。",
		"控制显示悬停提示前的等待时间 (毫秒)。",
		"控制当鼠标移动到悬停提示上时，其是否保持可见。",
		"在编辑器中启用代码操作小灯泡提示。",
		"控制行高。为 0 时则通过字体大小自动计算。",
		"控制是否显示缩略图。",
		"迷你地图的大小与编辑器内容相同(并且可能滚动)。",
		"迷你地图将根据需要拉伸或缩小以填充编辑器的高度(不滚动)。",
		"迷你地图将根据需要缩小，永远不会大于编辑器(不滚动)。",
		"控制迷你地图的大小。",
		"控制在哪一侧显示缩略图。",
		"控制何时显示迷你地图滑块。",
		"在迷你地图中绘制的内容比例: 1、2 或 3。",
		"渲染每行的实际字符，而不是色块。",
		"限制缩略图的宽度，控制其最多显示的列数。",
		"控制编辑器的顶边和第一行之间的间距量。",
		"控制编辑器的底边和最后一行之间的间距量。",
		"在输入时显示含有参数文档和类型信息的小面板。",
		"控制参数提示菜单在到达列表末尾时进行循环还是关闭。",
		"在字符串内启用快速建议。",
		"在注释内启用快速建议。",
		"在字符串和注释外启用快速建议。",
		"控制是否在键入时自动显示建议。",
		"不显示行号。",
		"将行号显示为绝对行数。",
		"将行号显示为与光标相隔的行数。",
		"每 10 行显示一次行号。",
		"控制行号的显示。",
		"此编辑器标尺将渲染的等宽字符数。",
		"此编辑器标尺的颜色。",
		"在一定数量的等宽字符后显示垂直标尺。输入多个值，显示多个标尺。若数组为空，则不绘制标尺。",
		"插入建议而不覆盖光标右侧的文本。",
		"插入建议并覆盖光标右侧的文本。",
		"控制接受补全时是否覆盖单词。请注意，这取决于扩展选择使用此功能。",
		"控制对建议的筛选和排序是否考虑小的拼写错误。",
		"控制排序时是否提高靠近光标的词语的优先级。",
		"控制是否在多个工作区和窗口间共享记忆的建议选项(需要 `#editor.suggestSelection#`)。",
		"控制活动代码段是否阻止快速建议。",
		"控制是否在建议中显示或隐藏图标。",
		"控制在显示滚动条之前 IntelliSense 将显示的建议数 (最多 15个)。",
		"此设置已弃用，请改用单独的设置，如\"editor.suggest.showKeywords\"或\"editor.suggest.showSnippets\"。",
		"启用后，IntelliSense 将显示“方法”建议。",
		"启用后，IntelliSense 将显示“函数”建议。",
		"启用后，IntelliSense 将显示“构造函数”建议。",
		"启用后，IntelliSense 将显示“字段”建议。",
		"启用后，IntelliSense 将显示“变量”建议。",
		"启用后，IntelliSense 将显示“类”建议。",
		"启用后，IntelliSense 将显示“结构”建议。",
		"启用后，IntelliSense 将显示“接口”建议。",
		"启用后，IntelliSense 将显示“模块”建议。",
		"启用后，IntelliSense 将显示“属性”建议。",
		"启用后，IntelliSense 将显示“事件”建议。",
		"启用后，IntelliSense 将显示“操作符”建议。",
		"启用后，IntelliSense 将显示“单位”建议。",
		"启用后，IntelliSense 将显示“值”建议。",
		"启用后，IntelliSense 将显示“常量”建议。",
		"启用后，IntelliSense 将显示“枚举”建议。",
		"启用后，IntelliSense 将显示 \"enumMember\" 建议。",
		"启用后，IntelliSense 将显示“关键字”建议。",
		"启用后，IntelliSense 将显示“文本”建议。",
		"启用后，IntelliSense 将显示“颜色”建议。",
		"启用后，IntelliSense 将显示“文件”建议。",
		"启用后，IntelliSense 将显示“参考”建议。",
		"启用后，IntelliSense 将显示“自定义颜色”建议。",
		"启用后，IntelliSense 将显示“文件夹”建议。",
		"启用后，IntelliSense 将显示 \"typeParameter\" 建议。",
		"启用后，IntelliSense 将显示“片段”建议。",
		"启用后，IntelliSense 将显示\"用户\"建议。",
		"启用后，IntelliSense 将显示\"问题\"建议。",
		"控制建议小部件底部的状态栏的可见性。",
		"控制是否应在遇到提交字符时接受建议。例如，在 JavaScript 中，半角分号 (`;`) 可以为提交字符，能够在接受建议的同时键入该字符。",
		"仅当建议包含文本改动时才可使用 `Enter` 键进行接受。",
		"控制除了 `Tab` 键以外， `Enter` 键是否同样可以接受建议。这能减少“插入新行”和“接受建议”命令之间的歧义。",
		"控制编辑器中可由屏幕阅读器读取的行数。警告: 对于大于默认值的数字，这会影响性能。",
		"编辑器内容",
		"使用语言配置确定何时自动闭合括号。",
		"仅当光标位于空白字符左侧时，才自动闭合括号。",
		"控制编辑器是否在左括号后自动插入右括号。",
		"仅在自动插入时才改写右引号或右括号。",
		"控制编辑器是否应改写右引号或右括号。",
		"使用语言配置确定何时自动闭合引号。",
		"仅当光标位于空白字符左侧时，才自动闭合引号。",
		"控制编辑器是否在左引号后自动插入右引号。",
		"编辑器不会自动插入缩进。",
		"编辑器将保留当前行的缩进。",
		"编辑器将保留当前行的缩进并遵循语言定义的括号。",
		"编辑器将保留当前行的缩进、使用语言定义的括号并调用语言定义的特定 onEnterRules。",
		"编辑器将保留当前行的缩进，使用语言定义的括号，调用由语言定义的特殊输入规则，并遵循由语言定义的缩进规则。",
		"控制编辑器是否应在用户键入、粘贴、移动或缩进行时自动调整缩进。",
		"使用语言配置确定何时自动包住所选内容。",
		"使用引号而非括号来包住所选内容。",
		"使用括号而非引号来包住所选内容。",
		"控制编辑器是否应自动包住所选内容。",
		"控制是否在编辑器中显示 CodeLens。",
		"控制编辑器是否显示内联颜色修饰器和颜色选取器。",
		"启用使用鼠标和键进行列选择。",
		"控制在复制时是否同时复制语法高亮。",
		"控制光标的动画样式。",
		"控制是否启用平滑插入动画。",
		"控制光标样式。",
		"控制光标周围可见的前置行和尾随行的最小数目。在其他一些编辑器中称为“scrollOff”或“scrollOffset”。",
		"仅当通过键盘或 API 触发时，才会强制执行\"光标环绕行\"。",
		"始终强制执行 \"cursorSurroundingLines\"",
		"控制何时应强制执行\"光标环绕行\"。",
		"当 `#editor.cursorStyle#` 设置为 `line` 时，控制光标的宽度。",
		"控制在编辑器中是否允许通过拖放来移动选中内容。",
		"按下\"Alt\"时滚动速度倍增。",
		"控制编辑器是否启用了代码折叠。",
		"使用特定于语言的折叠策略(如果可用)，否则使用基于缩进的策略。",
		"使用基于缩进的折叠策略。",
		"控制计算折叠范围的策略。",
		"控制编辑器是否应突出显示折叠范围。",
		"控制单击已折叠的行后面的空内容是否会展开该行。",
		"控制字体系列。",
		"控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。",
		"控制编辑器在键入一行后是否自动格式化该行。",
		"控制编辑器是否应呈现垂直字形边距。字形边距最常用于调试。",
		"控制是否在概览标尺中隐藏光标。",
		"控制是否突出显示编辑器中活动的缩进参考线。",
		"控制字母间距(像素)。",
		"控制是否在编辑器中检测链接并使其可被点击。",
		"突出显示匹配的括号。",
		"对鼠标滚轮滚动事件的 `deltaX` 和 `deltaY` 乘上的系数。",
		"按住 `Ctrl` 键并滚动鼠标滚轮时对编辑器字体大小进行缩放。",
		"当多个光标重叠时进行合并。",
		"映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。",
		"映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。",
		"在通过鼠标添加多个光标时使用的修改键。“转到定义”和“打开链接”功能所需的鼠标动作将会相应调整，不与多光标修改键冲突。[阅读详细信息](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier)。",
		"每个光标粘贴一行文本。",
		"每个光标粘贴全文。",
		"控制粘贴时粘贴文本的行计数与光标计数相匹配。",
		"控制编辑器是否突出显示语义符号的匹配项。",
		"控制是否在概览标尺周围绘制边框。",
		"打开速览时聚焦树",
		"打开预览时将焦点放在编辑器上",
		"控制是将焦点放在内联编辑器上还是放在预览小部件中的树上。",
		"控制\"转到定义\"鼠标手势是否始终打开预览小部件。",
		"控制显示快速建议前的等待时间 (毫秒)。",
		"控制是否在编辑器中输入时自动重命名。",
		"控制编辑器是否显示控制字符。",
		"控制编辑器是否显示缩进参考线。",
		"当文件以换行符结束时, 呈现最后一行的行号。",
		"同时突出显示导航线和当前行。",
		"控制编辑器的当前行进行高亮显示的方式。",
		"控制编辑器是否仅在焦点在编辑器时突出显示当前行",
		"呈现空格字符(字词之间的单个空格除外)。",
		"仅在选定文本上呈现空白字符。",
		"仅呈现尾随空格字符",
		"控制编辑器在空白字符上显示符号的方式。",
		"控制选区是否有圆角。",
		"控制编辑器水平滚动时可以超过范围的字符数。",
		"控制编辑器是否可以滚动到最后一行之后。",
		"同时垂直和水平滚动时，仅沿主轴滚动。在触控板上垂直滚动时，可防止水平漂移。",
		"控制是否支持 Linux 主剪贴板。",
		"控制编辑器是否应突出显示与所选内容类似的匹配项。",
		"始终显示折叠控件。",
		"仅在鼠标位于装订线上方时显示折叠控件。",
		"控制何时显示行号槽上的折叠控件。",
		"控制是否淡化未使用的代码。",
		"控制加删除线被弃用的变量。",
		"在其他建议上方显示代码片段建议。",
		"在其他建议下方显示代码片段建议。",
		"在其他建议中穿插显示代码片段建议。",
		"不显示代码片段建议。",
		"控制代码片段是否与其他建议一起显示及其排列的位置。",
		"控制编辑器是否在滚动时使用动画。",
		"建议小部件的字号。如果设置为 `0`，则使用 `#editor.fontSize#` 的值。",
		"建议小部件的行高。如果设置为 `0`，则使用 `#editor.lineHeight#` 的值。",
		"控制在键入触发字符后是否自动显示建议。",
		"始终选择第一个建议。",
		"选择最近的建议，除非进一步键入选择其他项。例如 `console. -> console.log`，因为最近补全过 `log`。",
		"根据之前补全过的建议的前缀来进行选择。例如，`co -> console`、`con -> const`。",
		"控制在建议列表中如何预先选择建议。",
		"在按下 Tab 键时进行 Tab 补全，将插入最佳匹配建议。",
		"禁用 Tab 补全。",
		"在前缀匹配时进行 Tab 补全。在 \"quickSuggestions\" 未启用时体验最好。",
		"启用 Tab 补全。",
		"忽略异常的行终止符。",
		"提示删除异常的行终止符。",
		"自动删除异常的行终止符。",
		"删除可能导致问题的异常行终止符。",
		"根据制表位插入和删除空格。",
		"执行单词相关的导航或操作时作为单词分隔符的字符。",
		"永不换行。",
		"将在视区宽度处换行。",
		"在 `#editor.wordWrapColumn#` 处折行。",
		"在视区宽度和 `#editor.wordWrapColumn#` 中的较小值处折行。",
		"控制折行的方式。",
		"在 `#editor.wordWrap#` 为 `wordWrapColumn` 或 `bounded` 时，控制编辑器的折行列。",
		"没有缩进。折行从第 1 列开始。",
		"折行的缩进量与其父级相同。",
		"折行的缩进量比其父级多 1。",
		"折行的缩进量比其父级多 2。",
		"控制折行的缩进。",
		"假定所有字符的宽度相同。这是一种快速算法，适用于等宽字体和某些字形宽度相等的文字(如拉丁字符)。",
		"将包装点计算委托给浏览器。这是一个缓慢算法，可能会导致大型文件被冻结，但它在所有情况下都正常工作。",
		"控制计算包裹点的算法。",
	],
	"vs/editor/common/model/editStack": [
		"输入",
	],
	"vs/editor/common/modes/modesRegistry": [
		"纯文本",
	],
	"vs/editor/common/standaloneStrings": [
		"无选择",
		"行 {0}, 列 {1} (选中 {2})",
		"行 {0}, 列 {1}",
		"{0} 选择(已选择 {1} 个字符)",
		"{0} 选择",
		"现在将 \"辅助功能支持\" 设置更改为 \"打开\"。",
		"现在正在打开“编辑器辅助功能”文档页。",
		"在差异编辑器的只读窗格中。",
		"在一个差异编辑器的窗格中。",
		"在只读代码编辑器中",
		"在代码编辑器中",
		"若要配置编辑器，将其进行优化以最好地配合屏幕阅读器的使用，请立即按 Command+E。",
		"若要配置编辑器，将其进行优化以最高效地配合屏幕阅读器的使用，按下 Ctrl+E。",
		"配置编辑器，将其进行优化以最好地配合屏幕读取器的使用。",
		"编辑器被配置为永远不进行优化以配合屏幕读取器的使用, 而当前不是这种情况。",
		"在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。通过按 {0} 切换此行为。",
		"在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过按键绑定触发命令 {0}。",
		"在当前编辑器中按 Tab 将插入制表符。通过按 {0} 切换此行为。",
		"在当前编辑器中按 Tab 会插入制表符。当前无法通过键绑定触发命令 {0}。",
		"现在按 Command+H 打开一个浏览器窗口, 其中包含有关编辑器辅助功能的详细信息。",
		"现在按 Ctrl+H 打开一个浏览器窗口, 其中包含有关编辑器辅助功能的更多信息。",
		"你可以按 Esc 或 Shift+Esc 消除此工具提示并返回到编辑器。",
		"显示辅助功能帮助",
		"开发人员: 检查令牌",
		"转到行/列...",
		"显示所有快速访问提供程序",
		"命令面板",
		"显示并运行命令",
		"转到符号...",
		"按类别转到符号...",
		"编辑器内容",
		"按 Alt+F1 可打开辅助功能选项。",
		"切换高对比度主题",
		"在 {1} 个文件中进行了 {0} 次编辑",
	],
	"vs/editor/common/view/editorColorRegistry": [
		"光标所在行高亮内容的背景颜色。",
		"光标所在行四周边框的背景颜色。",
		"背景颜色的高亮范围，喜欢通过快速打开和查找功能。颜色不能不透明，以免隐藏底层装饰。",
		"高亮区域边框的背景颜色。",
		"高亮显示符号的背景颜色，例如转到定义或转到下一个/上一个符号。颜色不能是不透明的，以免隐藏底层装饰。",
		"高亮显示符号周围的边框的背景颜色。",
		"编辑器光标颜色。",
		"编辑器光标的背景色。可以自定义块型光标覆盖字符的颜色。",
		"编辑器中空白字符的颜色。",
		"编辑器缩进参考线的颜色。",
		"编辑器活动缩进参考线的颜色。",
		"编辑器行号的颜色。",
		"编辑器活动行号的颜色",
		"\"Id\" 已被弃用，请改用 \"editorLineNumber.activeForeground\"。",
		"编辑器活动行号的颜色",
		"编辑器标尺的颜色。",
		"编辑器 CodeLens 的前景色",
		"匹配括号的背景色",
		"匹配括号外框的颜色",
		"概览标尺边框的颜色。",
		"编辑器概述标尺的背景色。仅当缩略图已启用且置于编辑器右侧时才使用。",
		"编辑器导航线的背景色。导航线包括边缘符号和行号。",
		"编辑器中不必要(未使用)的源代码的边框颜色。",
		"非必须(未使用)代码的在编辑器中显示的不透明度。例如，\"#000000c0\" 将以 75% 的不透明度显示代码。对于高对比度主题，请使用 ”editorUnnecessaryCode.border“ 主题来为非必须代码添加下划线，以避免颜色淡化。",
		"用于突出显示范围的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"概览标尺中错误标记的颜色。",
		"概览标尺中警告标记的颜色。",
		"概览标尺中信息标记的颜色。",
	],
	"vs/editor/contrib/anchorSelect/anchorSelect": [
		"选择定位点",
		"定位点设置为 {0}:{1}",
		"设置选择定位点",
		"转到选择定位点",
		"选择从定位点到光标",
		"取消选择定位点",
	],
	"vs/editor/contrib/bracketMatching/bracketMatching": [
		"概览标尺上表示匹配括号的标记颜色。",
		"转到括号",
		"选择括号所有内容",
		"转到括号(&&B)",
	],
	"vs/editor/contrib/caretOperations/caretOperations": [
		"向左移动所选文本",
		"向右移动所选文本",
	],
	"vs/editor/contrib/caretOperations/transpose": [
		"转置字母",
	],
	"vs/editor/contrib/clipboard/clipboard": [
		"剪切(&&T)",
		"剪切",
		"剪切",
		"复制(&&C)",
		"复制",
		"复制",
		"粘贴(&&P)",
		"粘贴",
		"粘贴",
		"复制并突出显示语法",
	],
	"vs/editor/contrib/codeAction/codeActionCommands": [
		"要运行的代码操作的种类。",
		"控制何时应用返回的操作。",
		"始终应用第一个返回的代码操作。",
		"如果仅返回的第一个代码操作，则应用该操作。",
		"不要应用返回的代码操作。",
		"如果只应返回首选代码操作，则应返回控件。",
		"应用代码操作时发生未知错误",
		"快速修复...",
		"没有可用的代码操作",
		"没有适用于\"{0}\"的首选代码操作",
		"没有适用于\"{0}\"的代码操作",
		"没有可用的首选代码操作",
		"没有可用的代码操作",
		"重构...",
		"没有适用于\"{0}\"的首选重构",
		"没有可用的\"{0}\"重构",
		"没有可用的首选重构",
		"没有可用的重构操作",
		"源代码操作...",
		"没有适用于\"{0}\"的首选源操作",
		"没有适用于“ {0}”的源操作",
		"没有可用的首选源操作",
		"没有可用的源代码操作",
		"整理 import 语句",
		"没有可用的整理 import 语句操作",
		"全部修复",
		"没有可用的“全部修复”操作",
		"自动修复...",
		"没有可用的自动修复程序",
	],
	"vs/editor/contrib/codeAction/lightBulbWidget": [
		"显示修复程序。首选可用修复程序 ({0})",
		"显示修补程序({0})",
		"显示修补程序",
	],
	"vs/editor/contrib/codelens/codelensController": [
		"显示当前行的 Code Lens 命令",
	],
	"vs/editor/contrib/comment/comment": [
		"切换行注释",
		"切换行注释(&&T)",
		"添加行注释",
		"删除行注释",
		"切换块注释",
		"切换块注释(&&B)",
	],
	"vs/editor/contrib/contextmenu/contextmenu": [
		"显示编辑器上下文菜单",
	],
	"vs/editor/contrib/cursorUndo/cursorUndo": [
		"光标撤消",
		"光标重做",
	],
	"vs/editor/contrib/documentSymbols/outlineTree": [
		"数组符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中。",
		"布尔符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"类符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"颜色符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"常量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"构造函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"枚举符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"枚举器成员符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"事件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"字段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"文件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"文件夹符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"接口符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中。",
		"键符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"关键字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"方法符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"模块符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"命名空间符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中。",
		"空符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"数字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"对象符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"运算符符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"包符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"属性符号的前景色。这些符号出现在大纲、痕迹导航栏和建议小组件中。",
		"参考符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"片段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"字符串符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中。",
		"结构符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"文本符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"类型参数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"单位符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
		"变量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中。",
	],
	"vs/editor/contrib/find/findController": [
		"查找",
		"查找(&&F)",
		"查找选定内容",
		"查找下一个",
		"查找下一个",
		"查找上一个",
		"查找上一个",
		"查找下一个选择",
		"查找上一个选择",
		"替换",
		"替换(&&R)",
	],
	"vs/editor/contrib/find/findWidget": [
		"查找",
		"查找",
		"上一个匹配项",
		"下一个匹配项",
		"在选定内容中查找",
		"关闭",
		"替换",
		"替换",
		"替换",
		"全部替换",
		"切换替换模式",
		"仅高亮了前 {0} 个结果，但所有查找操作均针对全文。",
		"{1} 中的 {0}",
		"无结果",
		"找到 {0}",
		"为“{1}”找到 {0}",
		"在 {2} 处找到“{1}”的 {0}",
		"为“{1}”找到 {0}",
		"Ctrl+Enter 现在由全部替换改为插入换行。你可以修改editor.action.replaceAll 的按键绑定以覆盖此行为。",
	],
	"vs/editor/contrib/folding/folding": [
		"展开",
		"以递归方式展开",
		"折叠",
		"切换折叠",
		"以递归方式折叠",
		"折叠所有块注释",
		"折叠所有区域",
		"展开所有区域",
		"全部折叠",
		"全部展开",
		"折叠级别 {0}",
		"折叠范围后面的背景颜色。颜色必须设为透明，以免隐藏底层装饰。",
		"编辑器装订线中折叠控件的颜色。",
	],
	"vs/editor/contrib/fontZoom/fontZoom": [
		"放大编辑器字体",
		"缩小编辑器字体",
		"重置编辑器字体大小",
	],
	"vs/editor/contrib/format/format": [
		"在第 {0} 行进行了 1 次格式编辑",
		"在第 {1} 行进行了 {0} 次格式编辑",
		"第 {0} 行到第 {1} 行间进行了 1 次格式编辑",
		"第 {1} 行到第 {2} 行间进行了 {0} 次格式编辑",
	],
	"vs/editor/contrib/format/formatActions": [
		"格式化文档",
		"格式化选定内容",
	],
	"vs/editor/contrib/gotoError/gotoError": [
		"转到下一个问题 (错误、警告、信息)",
		"转到上一个问题 (错误、警告、信息)",
		"转到文件中的下一个问题 (错误、警告、信息)",
		"下一个问题(&&P)",
		"转到文件中的上一个问题 (错误、警告、信息)",
		"上一个问题(&&P)",
	],
	"vs/editor/contrib/gotoError/gotoErrorWidget": [
		"错误",
		"警告",
		"信息",
		"提示",
		"{1} 中的 {0}",
		"{0} 个问题(共 {1} 个)",
		"{0} 个问题(共 {1} 个)",
		"编辑器标记导航小组件错误颜色。",
		"编辑器标记导航小组件警告颜色。",
		"编辑器标记导航小组件信息颜色。",
		"编辑器标记导航小组件背景色。",
	],
	"vs/editor/contrib/gotoSymbol/goToCommands": [
		"快速查看",
		"定义",
		"未找到“{0}”的任何定义",
		"找不到定义",
		"转到定义",
		"转到定义(&&D)",
		"打开侧边的定义",
		"速览定义",
		"声明",
		"未找到“{0}”的声明",
		"未找到声明",
		"转到声明",
		"转到\"声明\"(&&D)",
		"未找到“{0}”的声明",
		"未找到声明",
		"查看声明",
		"类型定义",
		"未找到“{0}”的类型定义",
		"未找到类型定义",
		"转到类型定义",
		"转到类型定义(&&T)",
		"快速查看类型定义",
		"实现",
		"未找到“{0}”的实现",
		"未找到实现",
		"转到实现",
		"跳转到实现(&&I)",
		"查看实现",
		"未找到\"{0}\"的引用",
		"未找到引用",
		"转到引用",
		"转到引用(&&R)",
		"引用",
		"查看引用",
		"引用",
		"转到任何符号",
		"位置",
		"无“{0}”的结果",
		"引用",
	],
	"vs/editor/contrib/gotoSymbol/link/goToDefinitionAtPosition": [
		"单击显示 {0} 个定义。",
	],
	"vs/editor/contrib/gotoSymbol/peek/referencesController": [
		"正在加载...",
		"{0} ({1})",
	],
	"vs/editor/contrib/gotoSymbol/peek/referencesTree": [
		"{0} 个引用",
		"{0} 个引用",
		"引用",
	],
	"vs/editor/contrib/gotoSymbol/peek/referencesWidget": [
		"无可用预览",
		"无结果",
		"引用",
	],
	"vs/editor/contrib/gotoSymbol/referencesModel": [
		"在文件 {0} 的 {1} 行 {2} 列的符号",
		"{0} 中有 1 个符号，完整路径: {1}",
		"{1} 中有 {0} 个符号，完整路径: {2}",
		"未找到结果",
		"在 {0} 中找到 1 个符号",
		"在 {1} 中找到 {0} 个符号",
		"在 {1} 个文件中找到 {0} 个符号",
	],
	"vs/editor/contrib/gotoSymbol/symbolNavigation": [
		"{1} 的符号 {0}，下一个使用 {2}",
		"{1} 的符号 {0}",
	],
	"vs/editor/contrib/hover/hover": [
		"显示悬停",
		"显示定义预览悬停",
	],
	"vs/editor/contrib/hover/modesContentHover": [
		"正在加载...",
		"速览问题",
		"正在检查快速修复...",
		"没有可用的快速修复",
		"快速修复...",
	],
	"vs/editor/contrib/inPlaceReplace/inPlaceReplace": [
		"替换为上一个值",
		"替换为下一个值",
	],
	"vs/editor/contrib/indentation/indentation": [
		"将缩进转换为空格",
		"将缩进转换为制表符",
		"已配置制表符大小",
		"选择当前文件的制表符大小",
		"使用 \"Tab\" 缩进",
		"使用空格缩进",
		"从内容中检测缩进方式",
		"重新缩进行",
		"重新缩进所选行",
	],
	"vs/editor/contrib/linesOperations/linesOperations": [
		"向上复制行",
		"向上复制行(&&C)",
		"向下复制行",
		"向下复制一行(&&P)",
		"重复选择",
		"重复选择(&&D)",
		"向上移动行",
		"向上移动一行(&&V)",
		"向下移动行",
		"向下移动一行(&&L)",
		"按升序排列行",
		"按降序排列行",
		"裁剪尾随空格",
		"删除行",
		"行缩进",
		"行减少缩进",
		"在上面插入行",
		"在下面插入行",
		"删除左侧所有内容",
		"删除右侧所有内容",
		"合并行",
		"转置光标处的字符",
		"转换为大写",
		"转换为小写",
		"转换为词首字母大写",
	],
	"vs/editor/contrib/links/links": [
		"执行命令",
		"关注链接",
		"cmd + 单击",
		"ctrl + 单击",
		"option + 单击",
		"alt + 单击",
		"此链接格式不正确，无法打开: {0}",
		"此链接目标已丢失，无法打开。",
		"打开链接",
	],
	"vs/editor/contrib/message/messageController": [
		"无法在只读编辑器中编辑",
	],
	"vs/editor/contrib/multicursor/multicursor": [
		"在上面添加光标",
		"在上面添加光标(&&A)",
		"在下面添加光标",
		"在下面添加光标(&&D)",
		"在行尾添加光标",
		"在行尾添加光标(&&U)",
		"在底部添加光标",
		"在顶部添加光标",
		"将下一个查找匹配项添加到选择",
		"添加下一个匹配项(&&N)",
		"将选择内容添加到上一查找匹配项",
		"添加上一个匹配项(&&R)",
		"将上次选择移动到下一个查找匹配项",
		"将上个选择内容移动到上一查找匹配项",
		"选择所有找到的查找匹配项",
		"选择所有匹配项(&&O)",
		"更改所有匹配项",
	],
	"vs/editor/contrib/parameterHints/parameterHints": [
		"触发参数提示",
	],
	"vs/editor/contrib/parameterHints/parameterHintsWidget": [
		"{0}，提示",
	],
	"vs/editor/contrib/peekView/peekView": [
		"关闭",
		"速览视图标题区域背景颜色。",
		"速览视图标题颜色。",
		"速览视图标题信息颜色。",
		"速览视图边框和箭头颜色。",
		"速览视图结果列表背景色。",
		"速览视图结果列表中行节点的前景色。",
		"速览视图结果列表中文件节点的前景色。",
		"速览视图结果列表中所选条目的背景色。",
		"速览视图结果列表中所选条目的前景色。",
		"速览视图编辑器背景色。",
		"速览视图编辑器中装订线的背景色。",
		"在速览视图结果列表中匹配突出显示颜色。",
		"在速览视图编辑器中匹配突出显示颜色。",
		"在速览视图编辑器中匹配项的突出显示边框。",
	],
	"vs/editor/contrib/quickAccess/gotoLineQuickAccess": [
		"先打开文本编辑器然后跳转到行。",
		"转到第 {0} 行、第 {1} 列。",
		"转到行 {0}。",
		"当前行: {0}，字符: {1}。键入要导航到的行号(介于 1 至 {2} 之间)。",
		"当前行: {0}，字符: {1}。 键入要导航到的行号。",
	],
	"vs/editor/contrib/quickAccess/gotoSymbolQuickAccess": [
		"要转到符号，首先打开具有符号信息的文本编辑器。",
		"活动文本编辑器不提供符号信息。",
		"没有匹配的编辑器符号",
		"没有编辑器符号",
		"在侧边打开",
		"在底部打开",
		"符号({0})",
		"属性({0})",
		"方法({0})",
		"函数({0})",
		"构造函数 ({0})",
		"变量({0})",
		"类({0})",
		"结构({0})",
		"事件({0})",
		"运算符({0})",
		"接口({0})",
		"命名空间({0})",
		"包({0})",
		"类型参数({0})",
		"模块({0})",
		"属性({0})",
		"枚举({0})",
		"枚举成员({0})",
		"字符串({0})",
		"文件({0})",
		"数组({0})",
		"数字({0})",
		"布尔值({0})",
		"对象({0})",
		"键({0})",
		"字段({0})",
		"常量({0})",
	],
	"vs/editor/contrib/rename/onTypeRename": [
		"在键入时重命名符号",
		"编辑器根据类型自动重命名时的背景色。",
	],
	"vs/editor/contrib/rename/rename": [
		"无结果。",
		"解析重命名位置时发生未知错误",
		"正在重命名“{0}”",
		"重命名 {0}",
		"成功将“{0}”重命名为“{1}”。摘要: {2}",
		"重命名无法应用修改",
		"重命名无法计算修改",
		"重命名符号",
		"启用/禁用重命名之前预览更改的功能",
	],
	"vs/editor/contrib/rename/renameInputField": [
		"重命名输入。键入新名称并按 \"Enter\" 提交。",
		"按 {0} 进行重命名，按 {1} 进行预览",
	],
	"vs/editor/contrib/smartSelect/smartSelect": [
		"展开选择",
		"展开选定内容(&&E)",
		"收起选择",
		"缩小选定范围(&&S)",
	],
	"vs/editor/contrib/snippet/snippetVariables": [
		"星期天",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六",
		"周日",
		"周一",
		"周二",
		"周三",
		"周四",
		"周五",
		"周六",
		"一月",
		"二月",
		"三月",
		"四月",
		"5月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月",
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11 月",
		"12月",
	],
	"vs/editor/contrib/suggest/suggestController": [
		"选择“{0}”后进行了其他 {1} 次编辑",
		"触发建议",
		"{0} 插入",
		"{0} 插入",
		"{0} 替换",
		"{0} 替换",
		"{0} 插入",
		"显示更少",
		"显示更多",
	],
	"vs/editor/contrib/suggest/suggestWidget": [
		"建议小组件的背景色。",
		"建议小组件的边框颜色。",
		"建议小组件的前景色。",
		"建议小组件中所选条目的背景色。",
		"建议小组件中匹配内容的高亮颜色。",
		"读取更多({0})",
		"读取更少({0})",
		"正在加载...",
		"正在加载...",
		"无建议。",
		"{0}，文档: {1}",
		"建议",
	],
	"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode": [
		"切换 Tab 键移动焦点",
		"Tab 键将移动到下一可聚焦的元素",
		"Tab 键将插入制表符",
	],
	"vs/editor/contrib/tokenization/tokenization": [
		"开发人员: 强制重新进行标记",
	],
	"vs/editor/contrib/unusualLineTerminators/unusualLineTerminators": [
		"异常行终止符",
		"检测到异常行终止符",
		"此文件包含一个或多个异常的行终止符，例如行分隔符(LS)或段落分隔符(PS)。\r\n\r\n建议从文件中删除它们。可通过 \"editor.unusualLineTerminators\" 进行配置。",
		"修复此文件",
		"忽略此文件的问题",
	],
	"vs/editor/contrib/wordHighlighter/wordHighlighter": [
		"读取访问期间符号的背景色，例如读取变量时。颜色必须透明，以免隐藏下面的修饰效果。",
		"写入访问过程中符号的背景色，例如写入变量时。颜色必须透明，以免隐藏下面的修饰效果。",
		"符号在进行读取访问操作时的边框颜色，例如读取变量。",
		"符号在进行写入访问操作时的边框颜色，例如写入变量。",
		"用于突出显示符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"用于突出显示写权限符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"转到下一个突出显示的符号",
		"转到上一个突出显示的符号",
		"触发符号高亮",
	],
	"vs/platform/actions/browser/menuEntryActionViewItem": [
		"{0} ({1})",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"默认语言配置替代",
		"针对某种语言，配置替代编辑器设置。",
		"此设置不支持按语言配置。",
		"无法注册“{0}”。其符合描述特定语言编辑器设置的表达式 \"\\\\[.*\\\\]$\"。请使用 \"configurationDefaults\"。",
		"无法注册“{0}”。此属性已注册。",
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"({0})已按下。正在等待按下第二个键...",
		"组合键({0}，{1})不是命令。",
	],
	"vs/platform/list/browser/listService": [
		"工作台",
		"映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。",
		"映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。",
		"在通过鼠标多选树和列表条目时使用的修改键 (例如“资源管理器”、“打开的编辑器”和“源代码管理”视图)。“在侧边打开”功能所需的鼠标动作 (若可用) 将会相应调整，不与多选修改键冲突。",
		"控制在树和列表中怎样使用鼠标来展开子项(若支持)。对于树中的父节点，此设置将控制是使用单击还是双击来展开。注意，某些不适用于此设置的树或列表可能会忽略此项。 ",
		"控制列表和树是否支持工作台中的水平滚动。警告: 打开此设置影响会影响性能。",
		"控制树缩进(以像素为单位)。",
		"控制树是否应呈现缩进参考线。",
		"控制列表和树是否具有平滑滚动。",
		"简单键盘导航聚焦与键盘输入相匹配的元素。仅对前缀进行匹配。",
		"高亮键盘导航会突出显示与键盘输入相匹配的元素。进一步向上和向下导航将仅遍历突出显示的元素。",
		"筛选器键盘导航将筛选出并隐藏与键盘输入不匹配的所有元素。",
		"控制工作台中的列表和树的键盘导航样式。它可为“简单”、“突出显示”或“筛选”。",
		"控制列表和树中的键盘导航是否仅通过键入自动触发。如果设置为 `false` ，键盘导航只在执行 `list.toggleKeyboardNavigation` 命令时触发，您可以为该命令指定键盘快捷方式。",
	],
	"vs/platform/markers/common/markers": [
		"错误",
		"警告",
		"信息",
	],
	"vs/platform/quickinput/browser/commandsQuickAccess": [
		"{0}, {1}",
		"最近使用",
		"其他命令",
		"命令\"{0}\"导致错误 ({1})",
	],
	"vs/platform/quickinput/browser/helpQuickAccess": [
		"全局命令",
		"编辑器命令",
		"{0}, {1}",
	],
	"vs/platform/theme/common/colorRegistry": [
		"整体前景色。此颜色仅在不被组件覆盖时适用。",
		"错误信息的整体前景色。此颜色仅在不被组件覆盖时适用。",
		"工作台中图标的默认颜色。",
		"焦点元素的整体边框颜色。此颜色仅在不被其他组件覆盖时适用。",
		"在元素周围额外的一层边框，用来提高对比度从而区别其他元素。",
		"在活动元素周围额外的一层边框，用来提高对比度从而区别其他元素。",
		"文本中链接的前景色。",
		"文本中代码块的背景颜色。",
		"编辑器内小组件(如查找/替换)的阴影颜色。",
		"输入框背景色。",
		"输入框前景色。",
		"输入框边框。",
		"输入字段中已激活选项的边框颜色。",
		"输入字段中激活选项的背景颜色。",
		"输入字段中已激活的选项的前景色。",
		"输入验证结果为信息级别时的背景色。",
		"输入验证结果为信息级别时的前景色。",
		"严重性为信息时输入验证的边框颜色。",
		"严重性为警告时输入验证的背景色。",
		"输入验证结果为警告级别时的前景色。",
		"严重性为警告时输入验证的边框颜色。",
		"输入验证结果为错误级别时的背景色。",
		"输入验证结果为错误级别时的前景色。",
		"严重性为错误时输入验证的边框颜色。",
		"下拉列表背景色。",
		"下拉列表前景色。",
		"按钮前景色。",
		"按钮背景色。",
		"按钮在悬停时的背景颜色。",
		"Badge 背景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。",
		"Badge 前景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。",
		"表示视图被滚动的滚动条阴影。",
		"滚动条滑块背景色",
		"滚动条滑块在悬停时的背景色",
		"滚动条滑块在被点击时的背景色。",
		"表示长时间操作的进度条的背景色。",
		"编辑器中错误波浪线的前景色。",
		"编辑器中错误框的边框颜色。",
		"编辑器中警告波浪线的前景色。",
		"编辑器中警告框的边框颜色。",
		"编辑器中信息波浪线的前景色。",
		"编辑器中信息框的边框颜色。",
		"编辑器中提示波浪线的前景色。",
		"编辑器中提示框的边框颜色。",
		"编辑器背景色。",
		"编辑器默认前景色。",
		"编辑器组件(如查找/替换)背景颜色。",
		"编辑器小部件的前景色，如查找/替换。",
		"编辑器小部件的边框颜色。此颜色仅在小部件有边框且不被小部件重写时适用。",
		"编辑器小部件大小调整条的边框颜色。此颜色仅在小部件有调整边框且不被小部件颜色覆盖时使用。",
		"背景颜色快速选取器。快速选取器小部件是选取器(如命令调色板)的容器。",
		"前景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器。",
		"标题背景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器。",
		"快速选取器分组标签的颜色。",
		"快速选取器分组边框的颜色。",
		"编辑器所选内容的颜色。",
		"用以彰显高对比度的所选文本的颜色。",
		"非活动编辑器中所选内容的颜色，颜色必须透明，以免隐藏下面的装饰效果。",
		"具有与所选项相关内容的区域的颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"与所选项内容相同的区域的边框颜色。",
		"当前搜索匹配项的颜色。",
		"其他搜索匹配项的颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"限制搜索范围的颜色。颜色不能不透明，以免隐藏底层装饰。",
		"当前搜索匹配项的边框颜色。",
		"其他搜索匹配项的边框颜色。",
		"限制搜索的范围的边框颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"在下面突出显示悬停的字词。颜色必须透明，以免隐藏下面的修饰效果。",
		"编辑器悬停提示的背景颜色。",
		"编辑器悬停的前景颜色。",
		"光标悬停时编辑器的边框颜色。",
		"编辑器悬停状态栏的背景色。",
		"活动链接颜色。",
		"用于灯泡操作图标的颜色。",
		"用于灯泡自动修复操作图标的颜色。",
		"已插入的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。",
		"已删除的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。",
		"插入的文本的轮廓颜色。",
		"被删除文本的轮廓颜色。",
		"两个文本编辑器之间的边框颜色。",
		"差异编辑器的对角线填充颜色。对角线填充用于并排差异视图。",
		"焦点项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"焦点项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"已选项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"已选项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"已选项在列表或树非活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"已选项在列表或树非活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"非活动的列表或树控件中焦点项的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。",
		"使用鼠标移动项目时，列表或树的背景颜色。",
		"鼠标在项目上悬停时，列表或树的前景颜色。",
		"使用鼠标移动项目时，列表或树进行拖放的背景颜色。",
		"在列表或树中搜索时，其中匹配内容的高亮颜色。",
		"列表和树中类型筛选器小组件的背景色。",
		"列表和树中类型筛选器小组件的轮廓颜色。",
		"当没有匹配项时，列表和树中类型筛选器小组件的轮廓颜色。",
		"缩进参考线的树描边颜色。",
		"菜单的边框颜色。",
		"菜单项的前景颜色。",
		"菜单项的背景颜色。",
		"菜单中选定菜单项的前景色。",
		"菜单中所选菜单项的背景色。",
		"菜单中所选菜单项的边框颜色。",
		"菜单中分隔线的颜色。",
		"代码片段 Tab 位的高亮背景色。",
		"代码片段 Tab 位的高亮边框颜色。",
		"代码片段中最后的 Tab 位的高亮背景色。",
		"代码片段中最后的制表位的高亮边框颜色。",
		"用于查找匹配项的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"用于突出显示所选内容的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。",
		"用于查找匹配项的迷你地图标记颜色。",
		"编辑器选区在迷你地图中对应的标记颜色。",
		"用于错误的迷你地图标记颜色。",
		"用于警告的迷你地图标记颜色。",
		"迷你地图背景颜色。",
		"迷你地图滑块背景颜色。",
		"悬停时，迷你地图滑块的背景颜色。",
		"单击时，迷你地图滑块的背景颜色。",
		"用于问题错误图标的颜色。",
		"用于问题警告图标的颜色。",
		"用于问题信息图标的颜色。",
	],
	"vs/platform/undoRedo/common/undoRedoService": [
		"以下文件已关闭并且已在磁盘上修改: {0}。",
		"以下文件已以不兼容的方式修改: {0}。",
		"无法在所有文件中撤消“{0}”。{1}",
		"无法在所有文件中撤消“{0}”。{1}",
		"无法撤消所有文件的“{0}”，因为已更改 {1}",
		"无法跨所有文件撤销“{0}”，因为 {1} 上已有一项撤消或重做操作正在运行",
		"无法跨所有文件撤销“{0}”，因为同时发生了一项撤消或重做操作",
		"是否要在所有文件中撤消“{0}”?",
		"在 {0} 个文件中撤消",
		"撤消此文件",
		"取消",
		"无法撤销“{0}”，因为已有一项撤消或重做操作正在运行。",
		"无法在所有文件中重做“{0}”。{1}",
		"无法在所有文件中重做“{0}”。{1}",
		"无法对所有文件重做“{0}”，因为已更改 {1}",
		"无法跨所有文件重做“{0}”，因为 {1} 上已有一项撤消或重做操作正在运行",
		"无法跨所有文件重做“{0}”，因为同时发生了一项撤消或重做操作",
		"无法重做“{0}”，因为已有一项撤消或重做操作正在运行。",
	]
});