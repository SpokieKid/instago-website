'use client'

import { motion } from 'framer-motion'
import { 
  Camera,
  Upload,
  Brain,
  FileText,
  ArrowRight
} from 'lucide-react'

export default function WorkflowSection() {
  const steps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "截图捕获",
      description: "使用全局快捷键或拖拽到悬浮窗，快速捕获任何内容",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "智能上传",
      description: "图片自动上传到服务端，同时采集元数据信息",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI分析",
      description: "OCR识别、场景分析、生成建议和相关背景信息",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "结果呈现",
      description: "生成Markdown格式输出，提供todo列表和行动建议",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            智能工作流程
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            四个步骤，让截图变成生产力工具
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Step number */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 shadow-lg`}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-4 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-8 h-8 text-slate-400" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">全程无干扰，后台智能处理</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 