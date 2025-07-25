'use client'

import { motion } from 'framer-motion'
import { 
  Archive,
  RefreshCw,
  Layers,
  Zap,
  Database,
  BookMarked,
  Sparkles,
  Monitor
} from 'lucide-react'

export default function AdvancedFeatures() {
  const features = [
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: "Anki 卡片生成",
      description: "自动将截图和AI分析结果转换为Anki记忆卡片，支持间隔重复学习",
      highlight: "学习强化"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "智能截图库",
      description: "语义搜索你的截图历史，根据内容而非文件名快速找到需要的信息",
      highlight: "语义搜索"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "上下文关联",
      description: "AI自动关联相关截图，为当前内容提供历史背景和相关信息",
      highlight: "智能关联"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "macOS 原生集成",
      description: "状态栏常驻，全局快捷键，无缝融入你的macOS工作流程",
      highlight: "原生体验"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "场景化建议",
      description: "根据截图内容和应用来源，提供个性化的下一步行动建议",
      highlight: "个性化"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "持续学习",
      description: "AI持续学习你的使用习惯，越用越智能，越用越懂你",
      highlight: "自适应"
    }
  ]

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">高级功能</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            不只是截图工具
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            InstaGo 提供一整套智能功能，让每一次截图都成为知识管理和生产力提升的起点
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                {/* Highlight badge */}
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-2xl p-8 shadow-2xl">
            <Archive className="w-12 h-12" />
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">一次截图，多重价值</h3>
              <p className="text-indigo-100">OCR识别 → AI分析 → 知识存储 → 学习卡片 → 行动建议</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 