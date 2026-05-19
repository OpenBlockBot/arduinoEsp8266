const { formatMessage, ArgumentType, BlockType, ProgramModeType, ArduinoPeripheral } = window.Scratch;

const PNPID_LIST = [
    // CH340
    'USB\\VID_1A86&PID_7523',
    // CP2102
    'USB\\VID_10C4&PID_EA60',
    // FTDI
    'USB\\VID_0403&PID_6001'
];

const SERIAL_CONFIG = {
    baudRate: 57600,
    dataBits: 8,
    stopBits: 1
};

const DIVECE_OPT = {
    type: 'arduino',
    fqbn: {
        darwin: 'esp8266:esp8266:generic:baud=460800',
        linux: 'esp8266:esp8266:generic:baud=460800',
        win32: 'esp8266:esp8266:generic:baud=921600'
    }
};

const Pins = {
    GPIO0: '0',
    GPIO1: '1',
    GPIO2: '2',
    GPIO3: '3',
    GPIO4: '4',
    GPIO5: '5',
    GPIO6: '6',
    GPIO7: '7',
    GPIO8: '8',
    GPIO9: '9',
    GPIO10: '10',
    GPIO11: '11',
    GPIO12: '12',
    GPIO13: '13',
    GPIO14: '14',
    GPIO15: '15',
    GPIO16: '16',
    A0: 'A0'
};

const Level = {
    High: 'HIGH',
    Low: 'LOW'
};

const Buadrate = {
    B4800: '4800',
    B9600: '9600',
    B19200: '19200',
    B38400: '38400',
    B57600: '57600',
    B76800: '76800',
    B115200: '115200'
};

const Eol = {
    Warp: 'warp',
    NoWarp: 'noWarp'
};

const Mode = {
    Input: 'INPUT',
    Output: 'OUTPUT',
    InputPullup: 'INPUT_PULLUP'
};

const InterrupMode = {
    Rising: 'RISING',
    Falling: 'FALLING',
    Change: 'CHANGE'
};

const DataType = {
    Integer: 'INTEGER',
    Decimal: 'DECIMAL',
    String: 'STRING'
};

class ArduinoEsp8266 extends ArduinoPeripheral {
    constructor (runtime, deviceId) {
        super(runtime, deviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
    }
}

class OpenBlockArduinoEsp8266Device {
    get DEVICE_ID () {
        return 'arduinoEsp8266';
    }

    get PINS_MENU () {
        return [
            { text: 'GPIO0', value: Pins.GPIO0 },
            { text: 'GPIO1', value: Pins.GPIO1 },
            { text: 'GPIO2', value: Pins.GPIO2 },
            { text: 'GPIO3', value: Pins.GPIO3 },
            { text: 'GPIO4', value: Pins.GPIO4 },
            { text: 'GPIO5', value: Pins.GPIO5 },
            { text: 'GPIO12', value: Pins.GPIO12 },
            { text: 'GPIO13', value: Pins.GPIO13 },
            { text: 'GPIO14', value: Pins.GPIO14 },
            { text: 'GPIO15', value: Pins.GPIO15 },
            { text: 'GPIO16', value: Pins.GPIO16 },
            { text: 'A0', value: Pins.A0 }
        ];
    }

    get MODE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoEsp8266.modeMenu.input', default: 'input' }), value: Mode.Input },
            { text: formatMessage({ id: 'arduinoEsp8266.modeMenu.output', default: 'output' }), value: Mode.Output },
            { text: formatMessage({ id: 'arduinoEsp8266.modeMenu.inputPullup', default: 'input-pullup' }), value: Mode.InputPullup }
        ];
    }

    get DIGITAL_PINS_MENU () {
        return [
            { text: 'GPIO0', value: Pins.GPIO0 },
            { text: 'GPIO1', value: Pins.GPIO1 },
            { text: 'GPIO2', value: Pins.GPIO2 },
            { text: 'GPIO3', value: Pins.GPIO3 },
            { text: 'GPIO4', value: Pins.GPIO4 },
            { text: 'GPIO5', value: Pins.GPIO5 },
            { text: 'GPIO12', value: Pins.GPIO12 },
            { text: 'GPIO13', value: Pins.GPIO13 },
            { text: 'GPIO14', value: Pins.GPIO14 },
            { text: 'GPIO15', value: Pins.GPIO15 },
            { text: 'GPIO16', value: Pins.GPIO16 }
        ];
    }

    get DEFAULT_DIGITAL_PIN () {
        return Pins.GPIO4;
    }

    get ANALOG_PINS_MENU () {
        return [
            { text: 'A0', value: Pins.A0 }
        ];
    }

    get DEFAULT_ANALOG_PIN () {
        return Pins.A0;
    }

    get PWM_AND_INTERRUPT_PINS_MENU () {
        return [
            { text: 'GPIO0', value: Pins.GPIO0 },
            { text: 'GPIO1', value: Pins.GPIO1 },
            { text: 'GPIO2', value: Pins.GPIO2 },
            { text: 'GPIO3', value: Pins.GPIO3 },
            { text: 'GPIO4', value: Pins.GPIO4 },
            { text: 'GPIO5', value: Pins.GPIO5 },
            { text: 'GPIO12', value: Pins.GPIO12 },
            { text: 'GPIO13', value: Pins.GPIO13 },
            { text: 'GPIO14', value: Pins.GPIO14 },
            { text: 'GPIO15', value: Pins.GPIO15 }
        ];
    }

    get DEFAULT_PWM_AND_INTERRUPT_PIN () {
        return Pins.GPIO4;
    }

    get LEVEL_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoEsp8266.levelMenu.high', default: 'high' }), value: Level.High },
            { text: formatMessage({ id: 'arduinoEsp8266.levelMenu.low', default: 'low' }), value: Level.Low }
        ];
    }

    get INTERRUP_MODE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoEsp8266.InterrupModeMenu.risingEdge', default: 'rising edge' }), value: InterrupMode.Rising },
            { text: formatMessage({ id: 'arduinoEsp8266.InterrupModeMenu.fallingEdge', default: 'falling edge' }), value: InterrupMode.Falling },
            { text: formatMessage({ id: 'arduinoEsp8266.InterrupModeMenu.changeEdge', default: 'change edge' }), value: InterrupMode.Change }
        ];
    }

    get BAUDTATE_MENU () {
        return [
            { text: '4800', value: Buadrate.B4800 },
            { text: '9600', value: Buadrate.B9600 },
            { text: '19200', value: Buadrate.B19200 },
            { text: '38400', value: Buadrate.B38400 },
            { text: '57600', value: Buadrate.B57600 },
            { text: '76800', value: Buadrate.B76800 },
            { text: '115200', value: Buadrate.B115200 }
        ];
    }

    get EOL_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoEsp8266.eolMenu.warp', default: 'warp' }), value: Eol.Warp },
            { text: formatMessage({ id: 'arduinoEsp8266.eolMenu.noWarp', default: 'no-warp' }), value: Eol.NoWarp }
        ];
    }

    get DATA_TYPE_MENU () {
        return [
            { text: formatMessage({ id: 'arduinoEsp8266.dataTypeMenu.integer', default: 'integer' }), value: DataType.Integer },
            { text: formatMessage({ id: 'arduinoEsp8266.dataTypeMenu.decimal', default: 'decimal' }), value: DataType.Decimal },
            { text: formatMessage({ id: 'arduinoEsp8266.dataTypeMenu.string', default: 'string' }), value: DataType.String }
        ];
    }

    constructor (runtime) {
        this.runtime = runtime;
        this._peripheral = new ArduinoEsp8266(this.runtime, this.DEVICE_ID);
        this._peripheral.numDigitalPins = 17;
    }

    getInfo () {
        return [
            {
                id: 'pin',
                name: formatMessage({ id: 'arduinoEsp8266.category.pins', default: 'Pins' }),
                color1: '#4C97FF',
                color2: '#3373CC',
                color3: '#3373CC',
                blocks: [
                    {
                        opcode: 'setPinMode',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.setPinMode', default: 'set pin [PIN] mode [MODE]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_DIGITAL_PIN },
                            MODE: { type: ArgumentType.STRING, menu: 'mode', defaultValue: Mode.Input }
                        }
                    },
                    {
                        opcode: 'setDigitalOutput',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.setDigitalOutput', default: 'set digital pin [PIN] out [LEVEL]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'digitalPins', defaultValue: this.DEFAULT_DIGITAL_PIN },
                            LEVEL: { type: ArgumentType.STRING, menu: 'level', defaultValue: Level.High }
                        }
                    },
                    {
                        opcode: 'setPwmOutput',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.setPwmOutput', default: 'set pwm pin [PIN] out [OUT]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pwmPins', defaultValue: this.DEFAULT_PWM_AND_INTERRUPT_PIN },
                            OUT: { type: ArgumentType.UINT8_NUMBER, defaultValue: '255' }
                        }
                    },
                    '---',
                    {
                        opcode: 'readDigitalPin',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.readDigitalPin', default: 'read digital pin [PIN]' }),
                        blockType: BlockType.BOOLEAN,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'digitalPins', defaultValue: this.DEFAULT_DIGITAL_PIN }
                        }
                    },
                    {
                        opcode: 'readAnalogPin',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.readAnalogPin', default: 'read analog pin [PIN]' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'analogPins', defaultValue: this.DEFAULT_ANALOG_PIN }
                        }
                    },
                    '---',
                    {
                        opcode: 'setServoOutput',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.setServoOutput', default: 'set servo pin [PIN] out [OUT]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pwmPins', defaultValue: this.DEFAULT_PWM_AND_INTERRUPT_PIN },
                            OUT: { type: ArgumentType.HALF_ANGLE, defaultValue: '90' }
                        }
                    },
                    '---',
                    {
                        opcode: 'esp8266AttachInterrupt',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.esp8266AttachInterrupt', default: 'attach interrupt pin [PIN] mode [MODE] executes' }),
                        blockType: BlockType.CONDITIONAL,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'interruptPins', defaultValue: this.DEFAULT_PWM_AND_INTERRUPT_PIN },
                            MODE: { type: ArgumentType.STRING, menu: 'interruptMode', defaultValue: InterrupMode.Rising }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'detachInterrupt',
                        text: formatMessage({ id: 'arduinoEsp8266.pins.detachInterrupt', default: 'detach interrupt pin [PIN]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'interruptPins', defaultValue: this.DEFAULT_PWM_AND_INTERRUPT_PIN }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    pins: { items: this.PINS_MENU },
                    mode: { items: this.MODE_MENU },
                    digitalPins: { items: this.DIGITAL_PINS_MENU },
                    analogPins: { items: this.ANALOG_PINS_MENU },
                    level: { acceptReporters: true, items: this.LEVEL_MENU },
                    pwmPins: { items: this.PWM_AND_INTERRUPT_PINS_MENU },
                    interruptPins: { items: this.PWM_AND_INTERRUPT_PINS_MENU },
                    interruptMode: { items: this.INTERRUP_MODE_MENU }
                }
            },
            {
                id: 'serial',
                name: formatMessage({ id: 'arduinoEsp8266.category.serial', default: 'Serial' }),
                color1: '#9966FF',
                color2: '#774DCB',
                color3: '#774DCB',
                blocks: [
                    {
                        opcode: 'serialBegin',
                        text: formatMessage({ id: 'arduinoEsp8266.serial.serialBegin', default: 'serial begin baudrate [VALUE]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            VALUE: { type: ArgumentType.STRING, menu: 'baudrate', defaultValue: Buadrate.B76800 }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'serialPrint',
                        text: formatMessage({ id: 'arduinoEsp8266.serial.serialPrint', default: 'serial print [VALUE] [EOL]' }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            VALUE: { type: ArgumentType.STRING, defaultValue: 'Hello OpenBlock' },
                            EOL: { type: ArgumentType.STRING, menu: 'eol', defaultValue: Eol.Warp }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'serialAvailable',
                        text: formatMessage({ id: 'arduinoEsp8266.serial.serialAvailable', default: 'serial available data length' }),
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'serialReadAByte',
                        text: formatMessage({ id: 'arduinoEsp8266.serial.serialReadAByte', default: 'serial read a byte' }),
                        blockType: BlockType.REPORTER,
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    baudrate: { items: this.BAUDTATE_MENU },
                    eol: { items: this.EOL_MENU }
                }
            },
            {
                id: 'data',
                name: formatMessage({ id: 'arduinoEsp8266.category.data', default: 'Data' }),
                color1: '#CF63CF',
                color2: '#C94FC9',
                color3: '#BD42BD',
                blocks: [
                    {
                        opcode: 'dataMap',
                        text: formatMessage({ id: 'arduinoEsp8266.data.dataMap', default: 'map [DATA] from ([ARG0], [ARG1]) to ([ARG2], [ARG3])' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '50' },
                            ARG0: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG1: { type: ArgumentType.NUMBER, defaultValue: '100' },
                            ARG2: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG3: { type: ArgumentType.NUMBER, defaultValue: '1000' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConstrain',
                        text: formatMessage({ id: 'arduinoEsp8266.data.dataConstrain', default: 'constrain [DATA] between ([ARG0], [ARG1])' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '50' },
                            ARG0: { type: ArgumentType.NUMBER, defaultValue: '1' },
                            ARG1: { type: ArgumentType.NUMBER, defaultValue: '100' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    '---',
                    {
                        opcode: 'dataConvert',
                        text: formatMessage({ id: 'arduinoEsp8266.data.dataConvert', default: 'convert [DATA] to [TYPE]' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.STRING, defaultValue: '123' },
                            TYPE: { type: ArgumentType.STRING, menu: 'dataType', defaultValue: DataType.Integer }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIICharacter',
                        text: formatMessage({ id: 'arduinoEsp8266.data.dataConvertASCIICharacter', default: 'convert [DATA] to ASCII character' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.NUMBER, defaultValue: '97' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'dataConvertASCIINumber',
                        text: formatMessage({ id: 'arduinoEsp8266.data.dataConvertASCIINumber', default: 'convert [DATA] to ASCII nubmer' }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            DATA: { type: ArgumentType.STRING, defaultValue: 'a' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    dataType: { items: this.DATA_TYPE_MENU }
                }
            }
        ];
    }

    setPinMode (args) {
        this._peripheral.setPinMode(args.PIN, args.MODE);
        return Promise.resolve();
    }

    setDigitalOutput (args) {
        this._peripheral.setDigitalOutput(args.PIN, args.LEVEL);
        return Promise.resolve();
    }

    setPwmOutput (args) {
        this._peripheral.setPwmOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }

    readDigitalPin (args) {
        return this._peripheral.readDigitalPin(args.PIN);
    }

    readAnalogPin (args) {
        return this._peripheral.readAnalogPin(args.PIN);
    }

    setServoOutput (args) {
        this._peripheral.setServoOutput(args.PIN, args.OUT);
        return Promise.resolve();
    }
}

export default OpenBlockArduinoEsp8266Device;
